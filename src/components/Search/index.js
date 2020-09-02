import React, { useContext, useState } from "react";
import { AppContext } from "../../storage/reducers";
import { setData } from "../../storage/actions";
import { getStores } from "../../services/http";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SearchInput = () => {
  const classes = useStyles();
  const { dispatch } = useContext(AppContext);
  const [select, setSelect] = useState("all");
  const [id, setId] = useState("");
  const [cuit, setCuit] = useState("");
  const [commerce, setCommerce] = useState("");

  const onChange = e => {
    if (e.target.name === "id") setId(e.target.value);
    if (e.target.name === "cuit") setCuit(e.target.value);
    if (e.target.name === "commerce") setCommerce(e.target.value);
  };

  const onChangeSelect = e => {
    setSelect(e.target.value);
  };

  const onSearch = async e => {
    let query = {
      id: { $regex: `${id ? id : ".*"}` },
      cuit: { $regex: `${cuit ? cuit : ".*"}` },
      commerce: { $regex: `${commerce ? commerce : ".*"}` },
      active: { $regex: `${select !== 'all' ? select : ".*"}` }
    };

    let response = await getStores(query)
    if(response.length !== 0){
      dispatch(setData(response))
    } else {
      dispatch(setData([]))
    }
    setId("");
    setCuit("");
    setCommerce("");
    setSelect("all");
  };



  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Filtros de Busqueda
        </Typography>
        <TextField
          className={classes.box}
          name="id"
          label="ID"
          variant="outlined"
          value={id}
          onChange={e => onChange(e)}
        />
        <TextField
          className={`${classes.box} ${classes.titleCuil}`}
          name="cuit"
          label="CUIT"
          variant="outlined"
          value={cuit}
          onChange={e => onChange(e)}
        />
        <TextField
          className={`${classes.box} ${classes.titleCommerce}`}
          name="commerce"
          label="Nombre Comercio"
          variant="outlined"
          value={commerce}
          onChange={e => onChange(e)}
        />
        <FormControl variant="outlined" className={classes.select}>
          <InputLabel id="label-select">Estado</InputLabel>
          <Select
            labelId="label-select"
            name="select"
            value={select}
            onChange={e => onChangeSelect(e)}
            label="Todos"
          >
            <MenuItem value="all">
              <em>Todos</em>
            </MenuItem>
            <MenuItem value={1}>Activos</MenuItem>
            <MenuItem value={0}>Inactivos</MenuItem>
          </Select>
        </FormControl>
        <Fab
          className={classes.btn}
          color="primary"
          onClick={e => onSearch(e)}
        >
          <SearchIcon />
        </Fab>
      </CardContent>
    </Card>
  );
};

export default SearchInput;

const useStyles = makeStyles({
  box: {
    padding: "0px 15px 15px 0px !important",
    "margin-top": "15px !important"
  },
  btn: {
    "margin-top": "15px !important"
  },
  select: {
    width: "20% !important",
    "padding-right": "15px !important",
    "margin-top": "15px !important"
  },
  titleCommerce: {
    width: "35% !important"
  },
  titleCuil: {
    width: "20% !important"
  }
});
