import axios from "axios";

export const dataBase = axios.create({
	// Headers: null,
	baseURL: "http://localhost:3001/",
});
