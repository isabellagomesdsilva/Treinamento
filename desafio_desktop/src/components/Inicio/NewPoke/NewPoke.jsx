import React, { useState } from "react";

import {
  Modal,
  Typography,
  Box,
  Button,
  TextField,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

import pikachu from '../../../assets/pikachu.png'
import lixeira from '../../../assets/trash.png'
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
  height: "85%",
  borderRadius: "5%",
  borderStyle: "none",
};

const styleText ={
  color: "#154A86"
}


export function NewPoke() {
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
          <Typography id='keep-mounted-modal-title' variant='h6' component='h2' sx={styleText}>
            CRIAR NOVO POKÉMON
          </Typography>
          <Container>
            <Typography id='keep-mounted-modal-description' sx={{ mt: 1 }} >
              Qual o nome do seu novo pokémon?
            </Typography>
            <TextField
              id='outlined-basic'
              label='Nome'
              variant='outlined'
            />
          </Container>
          <Container>
            <Typography sx={{mt: 1}}>Editar foto do pokémon</Typography>
            <Card sx={{ maxWidth: 50 + "%"}}>
              <CardMedia
                component='img'
                height='140'
                image={pikachu}
                alt='green iguana'
                sx={{backgroundColor: "#f4f4f4"}}
              />
              <CardContent sx={{backgroundColor: "#154A86"}}>
                <Typography>
                  Image.png
                </Typography>
              </CardContent>
            </Card>
            <Typography sx={{mt: 1}}>
                  Descrição do pokémon
                </Typography>
              <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="Descrição"
          sx={{backgroundColor: "#f4f4f4"}}
        />
          </Container>
          <Button onClick={handleClose} sx={{backgroundColor: "#154A86", color: "white", mt: 1, position: "absolute", left: "40%" }}>Criar</Button>
        </Box>
      </Modal>
    </div>
  );
}
