import axios from 'axios';

const API_URL = 'https://api.relooper.ai';

type Chord = { start: number; chord: string };
type UploadResponse = { chords: Chord[] };

export async function uploadFile(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post<UploadResponse>(`${API_URL}/upload/`, formData);
    return res.data;
}