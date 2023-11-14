import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid'; // Importez DataGrid depuis la bibliothèque @mui/x-data-grid
import { Grid /*, MenuItem*/, Button, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import TextField from '@mui/material/TextField';
import API_URL from 'conf';
import { Link } from 'react-router-dom'; // Importez Link
import { useSelector } from 'react-redux';

const Tab_client = () => {
  const [timeValue, setTimeValue] = useState(true);
  const token = useSelector((state) => state.account.token);

  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };
  const [clients, setClients] = useState([]);
  const [t, setT] = useState();
  const [newClient, setNewClient] = useState({
    name: '',
    responsable: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    n_client: '',
    maintenance: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //useSelector((state) => state.account.token);
  //const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${API_URL}/clients/`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          setClients(response.data);
          setLoading(false);
        } else {
          setError('Échec de la récupération des clients. Statut : ' + response.status);
          setLoading(false);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des clients :');
        console.log(token)
        setError('Une erreur s\'est produite lors de la récupération des clients.');
        setLoading(false);
      }
    };

    fetchClients();
  }, [token]); // Ajouter des dépendances au besoin

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setNewClient({
      ...newClient,
      [name]: inputValue,
    });
  };

  const handleCreateClient = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/clients/`,
        newClient, // Les données du nouveau client à créer
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      if (response.status === 201) {
        // La création du client a réussi (statut 201 Created)
        setClients([...clients, response.data]);
        setNewClient({
          name: '',
          responsable: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          n_client: '',
          maintenance: false,
        });
      } else {
        // Gérer les erreurs de création de manière appropriée (par exemple, afficher un message d'erreur à l'utilisateur)
        console.error('Erreur lors de la création du client :', response.data);
      }
    } catch (error) {
      // Gérer les erreurs de manière appropriée (par exemple, afficher un message d'erreur à l'utilisateur)
      console.error('Erreur lors de la création du client :', error);
    }
  };
  
  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Une erreur est produite : {error.message}</div>;
  }

  // Définissez les colonnes du DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 ,
    renderCell: (params) => (
        <Link to={`/client/${params.value}`}>{params.value}</Link>
      )},
    { field: 'name', headerName: 'Nom du client', flex: 1 },
    { field: 'responsable', headerName: 'Responsable', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Téléphone', flex: 1 },
    { field: 'address', headerName: 'Adresse', flex: 1 },
    { field: 'city', headerName: 'Ville', flex: 1 },
    { field: 'n_client', headerName: 'Numéro de client', flex: 1 },
    {
      field: 'maintenance',
      headerName: 'Sous contrat de maintenance',
      flex: 1,
      type: 'boolean',
    },
  ];

  return (
    <><MainCard>
          <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                  <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                          <Grid container direction="column" spacing={1}>
                              <Grid item>
                                  <Typography variant="subtitle2">Total</Typography>
                              </Grid>
                              <Grid item>
                                  <Typography variant="h3">{t}</Typography>
                              </Grid>
                          </Grid>
                      </Grid>
                      <Grid item>
                          <Button
                              disableElevation
                              variant={timeValue ? 'contained' : 'text'}
                              size="small"
                              sx={{ color: 'inherit' }}
                              onClick={(e) => handleChangeTime(e, true)}
                          >
                              liste
                          </Button>
                          <Button
                              disableElevation
                              variant={!timeValue ? 'contained' : 'text'}
                              size="small"
                              sx={{ color: 'inherit' }}
                              onClick={(e) => handleChangeTime(e, false)}
                          >
                              Creer
                          </Button>
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={12}>
                  <div>
                  {timeValue ? <><h2>Liste des Clients</h2><div style={{ height: 400, width: '100%' }}>
                          <DataGrid
                              rows={clients}
                              columns={columns}
                              pageSize={10}
                              rowsPerPageOptions={[10, 25, 50]} />
                      </div></> : <><h2>Créer un Client</h2><div>
                              <TextField
                                  name="name"
                                  label="Nom du client"
                                  value={newClient.name}
                                  onChange={handleInputChange} />
                              <TextField
                                  name="responsable"
                                  label="Responsable"
                                  value={newClient.responsable}
                                  onChange={handleInputChange} />
                              <TextField
                                  name="email"
                                  label="Email"
                                  value={newClient.email}
                                  onChange={handleInputChange} />
                              <TextField
                                  name="phone"
                                  label="Téléphone"
                                  value={newClient.phone}
                                  onChange={handleInputChange} />
                              <TextField
                                  name="address"
                                  label="Adresse"
                                  value={newClient.address}
                                  onChange={handleInputChange} />
                              <TextField
                                  name="city"
                                  label="Ville"
                                  value={newClient.city}
                                  onChange={handleInputChange} />
                              <TextField
                                  name="n_client"
                                  label="Numéro de client"
                                  value={newClient.n_client}
                                  onChange={handleInputChange} />
                              <label>
                                  Sous contrat de maintenance:{' '}
                                  <input
                                      type="checkbox"
                                      name="maintenance"
                                      checked={newClient.maintenance}
                                      onChange={handleInputChange} />
                              </label>
                              {/* Ajoutez d'autres champs ici */}
                              <Button variant="contained" color="primary" onClick={handleCreateClient}>
                                  Créer
                              </Button>
                          </div></>}
                      
                      
                  </div>
              </Grid>
          </Grid>
      </MainCard>
    </>
  );
};

export default Tab_client;
