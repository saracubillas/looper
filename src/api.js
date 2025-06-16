import axios from 'axios';

const API_URL = 'https://api.relooper.ai'; 

export async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);
  const res = await axios.post(`${API_URL}/upload`, formData);
  return res.data;
}