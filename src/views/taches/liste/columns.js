import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import API_URL from '../../../conf';

const DataGridComponent = ({ tache, setTache }) => {
  const columns = [
    // ... Vos colonnes ...
  ];

  // Gestion de la mise à jour de la cellule activité
  const handleActiviteUpdate = async (params) => {
    if (!isNaN(params.value)) {
      try {
        const response = await axios.get(`${API_URL}/activites/${params.value}`);
        updateCell('activite', params.row.id, response.data.nom);
      } catch (error) {
        console.error('Erreur lors de la récupération du nom de l\'activité :', error);
      }
    }
  };

  // Gestion de la mise à jour de la cellule catégorie
  const handleCategorieUpdate = async (params) => {
    if (!isNaN(params.value)) {
      try {
        const response = await axios.get(`${API_URL}/categories/${params.value}`);
        updateCell('categorie', params.row.id, response.data.nom);
      } catch (error) {
        console.error('Erreur lors de la récupération du nom de la catégorie :', error);
      }
    }
  };

  // Gestion de la mise à jour de la cellule appelant
  const handleAppelantUpdate = async (params) => {
    if (!isNaN(params.value)) {
      try {
        const response = await axios.get(`${API_URL}/appelants/${params.value}`);
        updateCell('appelant', params.row.id, response.data.name);
      } catch (error) {
        console.error('Erreur lors de la récupération du nom de l\'appelant :', error);
      }
    }
  };

  // Fonction utilitaire pour mettre à jour une cellule spécifique dans le state
  const updateCell = (fieldName, rowId, newValue) => {
    setTache((prevTache) => {
      const updatedTache = [...prevTache];
      const rowIndex = updatedTache.findIndex((row) => row.id === rowId);
      if (rowIndex !== -1) {
        updatedTache[rowIndex] = { ...updatedTache[rowIndex], [fieldName]: newValue };
      }
      return updatedTache;
    });
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tache}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        onEditCellChangeCommitted={(params) => {
          switch (params.field) {
            case 'activite':
              handleActiviteUpdate(params);
              break;
            case 'categorie':
              handleCategorieUpdate(params);
              break;
            case 'appelant':
              handleAppelantUpdate(params);
              break;
            // Gérer d'autres champs ici si nécessaire
            default:
              break;
          }
        }}
      />
    </Box>
  );
};

export default DataGridComponent;
