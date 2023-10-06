import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../../conf';
import DataGridComponent from './DataGridComponent';
import LoadingErrorComponent from './LoadingErrorComponent';

const TacheList = () => {
  const [tache, setTache] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTacheData = async () => {
      try {
        const response = await axios.get(`${API_URL}/taches/`);
        setTache(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des tâches :', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchTacheData();
  }, []);

  return (
    <div>
      <h2>Liste des Tâches</h2>
      <LoadingErrorComponent loading={loading} error={error} />
      <DataGridComponent tache={tache} setTache={setTache} />
    </div>
  );
};

export default TacheList;
