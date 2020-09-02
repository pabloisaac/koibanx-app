import React, { Fragment, useEffect, useContext, useState } from 'react';
import { AppContext } from './storage/reducers';
import { setData } from './storage/actions';
import { getStores } from './services/http';
import Search from './components/Search';
import Table from './components/Table';
import CircularProgress from '@material-ui/core/CircularProgress';

const App = () => {
  const { dispatch  } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataTable = async () => {
      let query = {
        id: { $regex: ".*"} ,
        cuit: { $regex: ".*"} ,
        commerce: { $regex: ".*"},
        active: { $regex: ".*"} 
      };
      let response = await getStores(query)
      if(response.length !== 0){
        dispatch(setData(response))
      } else {
        dispatch(setData([]))
      }
      setLoading(false)
    }
    getDataTable();
  }, []);

    return (
      <Fragment>
        { loading && <CircularProgress style={{marginLeft: '50%', marginTop: '25%'}} /> }
        { !loading && <Search /> }
        { !loading && <Table /> }
      </Fragment>
    );
}

export default App;