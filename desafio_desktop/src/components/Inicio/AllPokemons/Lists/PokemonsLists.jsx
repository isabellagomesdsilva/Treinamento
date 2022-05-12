import axios from "axios";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";


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

export function Lists() {
  const [data, setData] = useState();
  useEffect(() => {
    async function pokemonCard() {
      const { data } = await axios("http://localhost:5000/pokemon/all");
      setData(data.data);
    }
    pokemonCard();
  }, []);

  return data?.map((el) => {
    const rows = [
      {
        id: el.Pokedex_Number,
        name: el.Name,
        id_img: el.Img_name,
        geracao: el.Generation,
        evolution: el.Evolution_Stage,
        evolved: el.Evolved,
        family_id: el.FamilyID,
        cross_gen: el.Cross_Gen,
        tipo_1: el.Type_1,
        tipo_2: el.Type_2,
        clima_1: el.Weather_1,
        clima_2: el.Weather_1,
        stat: el.STAT_TOTAL,
        abilities_atk: el.ATK,
        abilities_def: el.DEF,
        abilities_sta: el.STA,
        legendary: el.Legendary,
        aquireable: el.Aquireable,
        spawns: el.Spawns,
        regional: el.Regional,
        raidable: el.Raidable,
        hatchable: el.Hatchable,
        shiny: el.Shiny
      },
    ];
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[7]}
          checkboxSelection
          sx={{align:"center"}}
        />
      </div>
    );
  });
}
