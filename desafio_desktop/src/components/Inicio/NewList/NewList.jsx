import React, { useState } from "react";

import { Modal, Typography, Box, Button, TextField, Container, Select, InputLabel } from "@mui/material";
import "./styles.css";

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

export function NewList() {
  const [open, setOpen] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography id='keep-mounted-modal-title' variant='h6' component='h2'>
            CRIAR NOVA LISTA
          </Typography>
          <Container>
            <Typography id='keep-mounted-modal-description' sx={{ mt: 2 }}>
              Qual o nome desta lista?
            </Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Container>
          <Container>
            <Typography>
              Que pokémons você deseja adicionar nessa lista?
            </Typography>
          </Container>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </div>
  );
}
