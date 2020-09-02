import React, { Fragment, useEffect, useContext, useState } from 'react';
import { AppContext } from './storage/reducers';
import { setData } from './storage/actions';
import { getStoresMock } from './services/http';
import Search from './components/Search';
import Table from './components/Table';
import CircularProgress from '@material-ui/core/CircularProgress';

const App = () => {
  const { dispatch  } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await getDataTable()
    })();
  }, []);


  const getDataTable = async () => {
    let response = await getStoresMock()
    if(response.length !== 0){
      dispatch(setData(response))
    } else {
      dispatch(setData([]))
    }
    setLoading(false)
  }

    return (
      <Fragment>
        { loading && <CircularProgress /> }
        { !loading && <Search /> }
        { !loading && <Table /> }
      </Fragment>
    );
}

export default App;