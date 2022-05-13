import React, { useState } from "react";
import Lupa from "../../../assets/Lupa.png";
import menuBarra from "../../../assets/MenuBarra.png";
import menuCard from "../../../assets/MenuCard.png";
import Filter from "../../../assets/Filtro.png";
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

import "./style.css";
export function MyLists() {
  const [TypeVisionML, setTypeVisionML] = useState("cards");
  const [ModalFilter, setModalFilter] = useState(false);
  const [type, setType] = React.useState("");
  const [lendary, setLendary] = React.useState("");
  const [evolution, setEvolution] = React.useState("");
  const [generation, setGeneration] = React.useState("");

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
  const handleOpen = () => setModalFilter(true);
  const handleClose = () => setModalFilter(false);
  return (
    <div className='MyListsAll'>
      <div className='HeaderML'>
        <h1>MINHAS LISTAS</h1>
      </div>
      <div className='barraPesquisaML'>
        <label className='labelSearchML'>
          <img src={Lupa} alt='' className='iconLupaML' />
          <input
            type='text'
            name='name'
            className='inputSearchML'
            placeholder='Buscar por nome do pokémon'
          />
          <button className='buttonSearchML'>Buscar</button>
        </label>
      </div>
      <div className='filtersML'>
        {TypeVisionML == "cards" ? (
          <div className='visãoBarraML'>
            <button
              onClick={() => {
                setTypeVisionML("lists");
              }}
              className='buttonListML'
            >
              <img
                src={menuBarra}
                alt='Botão para visualização em Lista'
                className='iconBarraML'
              />{" "}
              Visão por Lista
            </button>
          </div>
        ) : (
          <div className='visãoCardML'>
            <button
              onClick={() => {
                setTypeVisionML("cards");
              }}
              className='buttonFilterML'
            >
              <img
                src={menuCard}
                alt='Botão para visualização em Card'
                className='iconFilterML'
              />{" "}
              Visão por Cards
            </button>
          </div>
        )}
        <div className='advancedFilterML'>
          <button
            className='buttonAFilterML'
            onClick={() => {
              setModalFilter("show");
            }}
          >
            <img src={Filter} alt='filtro avançado' className='imgFilterAML' />
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

      {TypeVisionML == "cards" ? (
        <div className='cardsPokes'>
          <h1>CARDS</h1>
        </div>
      ) : (
        <div>
          <h1>LISTS</h1>
        </div>
      )}
    </div>
  );
}
