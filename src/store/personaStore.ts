import { useState, useEffect } from 'react';
import { getPersonas } from '../services/Persona';
import { Persona } from '../types/personaTypes';

//Aqui se guardara y se modificara el los valores internos

export const usePersonaStore = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [cargando, setCargando] = useState(true);

  const cargaPersonas = async () => {
    try {
      const data = await getPersonas();
      setPersonas(data);
    } catch (error) {
      console.error("Error cargando personas:", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargaPersonas();
  }, []);

  return { personas, cargando };
};
