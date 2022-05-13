import React, { useState } from "react";

import {
  Modal,
  Typography,
  Box,
  Button,
  TextField,
  Container,
  Select,
  InputLabel,
  OutlinedInput,
  ListItemText,
  Checkbox,
  MenuItem,
} from "@mui/material";
import "./styles.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px #000",
  boxShadow: 24,
  p: 4,
  height: "55%",
  borderRadius: "5%",
  borderStyle: "none",
};

const names = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
];

export function NewList() {
  const [open, setOpen] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='keep-mounted-modal-title'
            variant='h6'
            component='h2'
            sx={{ color: "#154A86", mt: 2 }}
          >
            CRIAR NOVA LISTA
          </Typography>
          <Container>
            <Typography id='keep-mounted-modal-description' sx={{ mt: 2 }}>
              Qual o nome desta lista?
            </Typography>
            <TextField
              id='outlined-basic'
              label='Outlined'
              variant='outlined'
            />
          </Container>
          <Container>
            <Typography sx={{ mt: 2 }}>
              Que pokémons você deseja adicionar nessa lista?
            </Typography>
            <Select
              labelId='demo-multiple-checkbox-label'
              id='demo-multiple-checkbox'
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label='Tag' />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </Container>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "#154A86",
              color: "white",
              mt: 1,
              position: "absolute",
              left: "40%",
            }}
          >
            Criar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
