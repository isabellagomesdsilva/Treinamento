import axios from "axios";
import React, { useState, useEffect } from "react";
import Lupa from "../../../assets/Lupa.png";
import menuBarra from "../../../assets/MenuBarra.png";
import menuCard from "../../../assets/MenuCard.png";
import Filter from "../../../assets/Filtro.png";
import { Cards } from "./Cards/PokemonsCards";
import { Lists } from "./Lists/PokemonsLists";
import {
  Modal,
  Typography,
  Box,
  Button,
  Pagination,
  Container,
  Select,
  InputLabel,
  MenuItem
} from "@mui/material";

import "./styles.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:" 17%",
    height: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderStyle: "none", 
  borderRadius: 5 + "%"
};

export function AllPokemons() {
  const [TypeVision, setTypeVision] = useState("cards");
  const [ModalFilter, setModalFilter] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPag, setTotalPag] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [lendary, setLendary] = useState("");
  const [evolution, setEvolution] = useState("");
  const [generation, setGeneration] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const options = (opt) => {
    setShowOptions(opt)
  }

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeLendary = (event) => {
    setLendary(event.target.value);
  };

  const handleChangeEvolution = (event) => {
    setEvolution(event.target.value);
  };

  const handleChangeGeneration = (event) => {
    setGeneration(event.target.value);
  };

  const onSearch = async (pokemon) => {
    const results = await axios(
      `http://localhost:5000/pokemon/?name=${pokemon}`
    );
    if (!results.data) {
      console.log("PESQUISA INVÁLIDA");
      setPokemons("notFound");
      setPage(0);
    } else {
      setPokemons([results]);
      console.log("RESULTS", pokemon);
    }
    setLoading(false);
  };

  async function inputSearch(e) {
    setSearch(e.target.value);
    if (e.target.value.length == 0) {
      setPokemons("empty");
    }
  }

  const pesquisa = async () => {
    await onSearch(search);
  };

  const totalPage = async () => {
    const pag = await axios("http://localhost:5000/pokemon/all");
    setTotalPag(pag.data.metaData[0].total);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const handleOpen = () => setModalFilter(true);
  const handleClose = () => setModalFilter(false);

  useEffect(() => {
    totalPage();
  }, []);

  return (
    <div className='AllPokes'>
      <div className='HeaderAll'>
        <h1>TODOS OS POKEMONS</h1>
      </div>
      <div className='barraPesquisa'>
        <label className='labelSearch'>
          <img src={Lupa} alt='' className='iconLupa' />
          <input
            type='text'
            name='name'
            className='inputSearch'
            placeholder='Buscar por nome do pokémon'
            onChange={inputSearch}
          />
          <button className='buttonSearch' onClick={pesquisa}>
            Buscar
          </button>
        </label>
      </div>
      <div className='filters'>
        {TypeVision == "cards" ? (
          <div className='visãoBarra'>
            <button
              onClick={() => {
                setTypeVision("lists");
              }}
              className='buttonList'
            >
              <img
                src={menuBarra}
                alt='Botão para visualização em Lista'
                className='iconBarra'
              />{" "}
              Visão por Lista
            </button>
          </div>
        ) : (
          <div className='visãoCard'>
            <button
              onClick={() => {
                setTypeVision("cards");
              }}
              className='buttonFilter'
            >
              <img
                src={menuCard}
                alt='Botão para visualização em Card'
                className='iconFilter'
              />{" "}
              Visão por Cards
            </button>
          </div>
        )}
        <div className='advancedFilter'>
          <button className='buttonAFilter' onClick={handleOpen}>
            <img src={Filter} alt='filtro avançado' className='imgFilterA' />
            Filtro Avançado
          </button>
          <Modal
            open={ModalFilter}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <Typography id='modal-modal-title' variant='h6' component='h2' >
                Filtrar por:
              </Typography>
              <Container sx={{display: "flex", flexDirection:"column"}}>
                <InputLabel id='demo-simple-select-label'>Tipo</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={type}
                  label='Tipo'
                  onChange={handleChangeType}
                >
                  <MenuItem value={"Normal"}>Normal</MenuItem>
                  <MenuItem value={"Water"}>Water</MenuItem>
                  <MenuItem value={"Grass"}>Grass</MenuItem>
                  <MenuItem value={"Psychic"}>Psychic</MenuItem>
                  <MenuItem value={"Fire"}>Fire</MenuItem>
                  <MenuItem value={"Ice"}>Ice</MenuItem>
                  <MenuItem value={"Bug"}>Bug</MenuItem>
                  <MenuItem value={"Ground"}>Ground</MenuItem>
                  <MenuItem value={"Ghost"}>Ghost</MenuItem>
                  <MenuItem value={"Rock"}>Rock</MenuItem>
                  <MenuItem value={"Poison"}>Poison</MenuItem>
                  <MenuItem value={"Dark"}>Dark</MenuItem>
                  <MenuItem value={"Electric"}>Electric</MenuItem>
                  <MenuItem value={"Dragon"}>Dragon</MenuItem>
                  <MenuItem value={"Fairy"}>Fairy</MenuItem>
                  <MenuItem value={"Fighting"}>Fighting</MenuItem>
                  <MenuItem value={"Steel"}>Stell</MenuItem>
                  <MenuItem value={"Flying"}>Flying</MenuItem>
                </Select>
                <InputLabel id='demo-simple-select-label'>Lendário</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={lendary}
                  label='Lendário'
                  onChange={handleChangeEvolution}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                </Select>
                <InputLabel id='demo-simple-select-label'>Evolução</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={evolution}
                  label='Evolução'
                  onChange={handleChangeLendary}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
                <InputLabel id='demo-simple-select-label'>Geração</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={generation}
                  label='Geração'
                  onChange={handleChangeGeneration}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                </Select>
              </Container>
              <Button sx={{left: 37+"%", position: "absolute"}}>Filtrar</Button>
            </Box>
          </Modal>
        </div>
      </div>

      {TypeVision == "cards" ? (
        <div className='totalCard'>
          <div className='cardsPokes'>
            <Cards page={page} pokemon={pokemons} />
          </div>
          <Pagination
            sx={{ marginTop: 1 + "%", marginLeft: 75 + "%" }}
            count={parseInt(totalPag / 4)}
            size='small'
            color='primary'
            onChange={handleChangePage}
          />
        </div>
      ) : (
        <div className='ListsPokes'>
          <Lists pokemon={pokemons} options={options}/>
        </div>
      )}
      
    </div>
  );
}
