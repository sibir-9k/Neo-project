import axios from "axios";

export const dataBase = () =>
	axios.create({
		headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
		baseURL: "http://localhost:3001/",
	});

