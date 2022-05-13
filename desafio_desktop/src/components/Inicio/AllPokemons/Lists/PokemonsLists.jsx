import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Table,
  styled,
  Pagination,
  Checkbox,
} from "@mui/material";

const columns = [
  { field: "name", headerName: "Name", width: 130 },
  { field: "id", headerName: "Pokedex Number", type: "number", width: 130 },
  { field: "id_img", headerName: "Img name", type: "number", width: 85 },
  { field: "geracao", headerName: "Generation", type: "number", width: 90 },
  {
    field: "evolution",
    headerName: "Evolution Stage",
    type: "number",
    width: 120,
  },
  { field: "evolved", headerName: "Evolved", type: "number", width: 70 },
  { field: "family_id", headerName: "Family ID", type: "number", width: 80 },
  { field: "cross_gen", headerName: "Cross Gen", type: "number", width: 85 },
  { field: "tipo_1", headerName: "Type 1", width: 80 },
  { field: "tipo_2", headerName: "Type 2", width: 80 },
  { field: "clima_1", headerName: "Weather 1", width: 95 },
  { field: "clima_2", headerName: "Weather 2", width: 95 },
  { field: "stat", headerName: "Stat Total", width: 80 },
  { field: "abilities_atk", headerName: "ATK", type: "number", width: 65 },
  { field: "abilities_def", headerName: "DEF", type: "number", width: 65 },
  { field: "abilities_sta", headerName: "STA", type: "number", width: 65 },
  { field: "legendary", headerName: "Legendary", type: "number", width: 85 },
  { field: "aquireable", headerName: "Aquireable", type: "number", width: 80 },
  { field: "spawns", headerName: "Spawns", type: "number", width: 70 },
  { field: "regional", headerName: "Regional", type: "number", width: 75 },
  { field: "raidable", headerName: "Raidable", type: "number", width: 75 },
  { field: "hatchable", headerName: "Hatchable", type: "number", width: 81 },
];

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#01579b",
    color: "#FFCB05",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function Lists(props) {
  const { pokemon, options } = props;
  const [data, setData] = useState();
  const [page, setPage] = useState(0);
  const [DataPerPage, setDataPerPage] = useState(10);
  const [totalPag, setTotalPag] = useState();

  const list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);


  async function handleSelectAll() {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li));
    if (isCheckAll) {
      setIsCheck([]);
    }
  }

  async function handleClick (e){
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
      if (!isCheckAll){
      }
    }
  };

  const totalPage = async () => {
    const pag = await axios("http://localhost:5000/pokemon/all");
    console.log(pag.data.metaData[0].total);
    setTotalPag(pag.data.metaData[0].total);
  };

  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  useEffect(() => {
    async function pokemonCard(page) {
      const { data } = await axios(
        `http://localhost:5000/pokemon/all?page=${page}&limit=10`
      );
      setData(data.data);
    }
    pokemonCard(page);
    totalPage();
    isCheckAll?handleSelectAll():null
  }, [page]);

  return (
    <Paper>
      <TableContainer
        component={Paper}
        sx={{ whiteSpace: "nowrap", maxHeight: 100 + "%" }}
      >
        <Table sx={{ overflow: "hidden" }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <Checkbox {...label} onChange={handleSelectAll} checked={isCheckAll}/>
              </StyledTableCell>
              <StyledTableCell align='center'>Name</StyledTableCell>
              <StyledTableCell align='center'>PokeDex Number</StyledTableCell>
              <StyledTableCell align='center'>Img name</StyledTableCell>
              <StyledTableCell align='center'>Generation</StyledTableCell>
              <StyledTableCell align='center'>Evolution Stage</StyledTableCell>
              <StyledTableCell align='center'>Evolved</StyledTableCell>
              <StyledTableCell align='center'>Family ID</StyledTableCell>
              <StyledTableCell align='center'>Cross Gen</StyledTableCell>
              <StyledTableCell align='center'>Type 1</StyledTableCell>
              <StyledTableCell align='center'>Type 2</StyledTableCell>
              <StyledTableCell align='center'>Weather 1</StyledTableCell>
              <StyledTableCell align='center'>Weather 2</StyledTableCell>
              <StyledTableCell align='center'>Stat Total</StyledTableCell>
              <StyledTableCell align='center'>ATK</StyledTableCell>
              <StyledTableCell align='center'>DEF</StyledTableCell>
              <StyledTableCell align='center'>STA</StyledTableCell>
              <StyledTableCell align='center'>Legendary</StyledTableCell>
              <StyledTableCell align='center'>Aquireable</StyledTableCell>
              <StyledTableCell align='center'>Spawns</StyledTableCell>
              <StyledTableCell align='center'>Regional</StyledTableCell>
              <StyledTableCell align='center'>Raidable</StyledTableCell>
              <StyledTableCell align='center'>Hatchable</StyledTableCell>
              <StyledTableCell align='center'>Shiny</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemon == "notFound" ? (
              <div>
                <h1 className='notFound'>Pokémon não encontrado</h1>
              </div>
            ) : pokemon[0] && pokemon != "empty" ? (
              pokemon.map((pokemon, index) => {
                return (
                  <TableRow
                    key={pokemon}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      display: "contents",
                    }}
                  >
                    <TableCell component='th' scope='row'>
                      <Checkbox {...label} id={index} onChange={handleClick} checked={isCheck.includes(`${index}`)} />
                    </TableCell>
                    <TableCell align='center'>{pokemon.data.Name}</TableCell>
                    <TableCell align='center'>
                      {pokemon.data.Pokedex_Number}
                    </TableCell>
                    <TableCell align='center'>
                      {pokemon.data.Img_name}
                    </TableCell>
                    <TableCell align='center'>
                      {pokemon.data.Generation}
                    </TableCell>
                    <TableCell align='center'>
                      {pokemon.data.Evolution_Stage}
                    </TableCell>
                    <TableCell align='center'>{pokemon.data.Evolved}</TableCell>
                    <TableCell align='center'>
                      {pokemon.data.FamilyID}
                    </TableCell>
                    <TableCell align='center'>
                      {pokemon.data.Cross_Gen}
                    </TableCell>
                    <TableCell align='center'>{pokemon.data.Type_1}</TableCell>
                    <TableCell align='center'>{pokemon.data.Type_2}</TableCell>
                    <TableCell align='center'>
                      {pokemon.data.Weather_1}
                    </TableCell>
                    <TableCell align='center'>
                      {pokemon.data.Weather_2}
                    </TableCell>
                    <TableCell align='center'>
                      {pokemon.data.STAT_TOTAL}
                    </TableCell>
                    <TableCell align='center'>{pokemon.data.ATK}</TableCell>
                    <TableCell align='center'>{pokemon.data.DEF}</TableCell>
                    <TableCell align='center'>{pokemon.data.STA}</TableCell>
                    <TableCell align='center'>
                      {pokemon.data.Legendary}
                    </TableCell>
                    <TableCell align='center'>
                      {pokemon.data.Aquireable}
                    </TableCell>
                    <TableCell align='center'>{pokemon.data.Spawns}</TableCell>
                    <TableCell align='center'>
                      {pokemon.data.Regional}
                    </TableCell>
                    <TableCell align='center'>
                      {pokemon.data.Raidable}
                    </TableCell>
                    <TableCell align='center'>
                      {pokemon.data.Hatchable}
                    </TableCell>
                    <TableCell align='center'>{pokemon.data.Shiny}</TableCell>
                  </TableRow>
                );
              })
            ) : (
              data?.map((pokemon, index) => {
                return (
                  <TableRow
                    key={pokemon.Name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      <Checkbox {...label} id={index} onChange={handleClick} checked={isCheck.includes(`${index}`)}/>
                    </TableCell>
                    <TableCell align='center'>{pokemon.Name}</TableCell>
                    <TableCell align='center'>
                      {pokemon.Pokedex_Number}
                    </TableCell>
                    <TableCell align='center'>{pokemon.Img_name}</TableCell>
                    <TableCell align='center'>{pokemon.Generation}</TableCell>
                    <TableCell align='center'>
                      {pokemon.Evolution_Stage}
                    </TableCell>
                    <TableCell align='center'>{pokemon.Evolved}</TableCell>
                    <TableCell align='center'>{pokemon.FamilyID}</TableCell>
                    <TableCell align='center'>{pokemon.Cross_Gen}</TableCell>
                    <TableCell align='center'>{pokemon.Type_1}</TableCell>
                    <TableCell align='center'>{pokemon.Type_2}</TableCell>
                    <TableCell align='center'>{pokemon.Weather_1}</TableCell>
                    <TableCell align='center'>{pokemon.Weather_2}</TableCell>
                    <TableCell align='center'>{pokemon.STAT_TOTAL}</TableCell>
                    <TableCell align='center'>{pokemon.ATK}</TableCell>
                    <TableCell align='center'>{pokemon.DEF}</TableCell>
                    <TableCell align='center'>{pokemon.STA}</TableCell>
                    <TableCell align='center'>{pokemon.Legendary}</TableCell>
                    <TableCell align='center'>{pokemon.Aquireable}</TableCell>
                    <TableCell align='center'>{pokemon.Spawns}</TableCell>
                    <TableCell align='center'>{pokemon.Regional}</TableCell>
                    <TableCell align='center'>{pokemon.Raidable}</TableCell>
                    <TableCell align='center'>{pokemon.Hatchable}</TableCell>
                    <TableCell align='center'>{pokemon.Shiny}</TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        sx={{ marginTop: 1 + "%", marginLeft: 75 + "%" }}
        count={parseInt(totalPag / 10)}
        size='small'
        onChange={handleChangePage}
      />
    </Paper>
  );
}
