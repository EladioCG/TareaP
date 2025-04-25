import axios from "axios";
import { Persona } from '../types/personaTypes';

//Aqui se consume la api por medio de axios.

const API_URL = 'https://tiusr13pl.cuc-carrera-ti.ac.cr/apipersonas/api';

export const getPersonas = async (): Promise<Persona[]> => {
  const response = await axios.get(`${API_URL}/Persona`);
  return response.data;
};
