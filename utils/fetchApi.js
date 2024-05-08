import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'f6b787c67cmsh66f8e53933ed1e3p19e855jsnd9d39ee7cb33' ,
    },
  });
    
  return data;
}