import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL + "/seminars";
console.log(baseUrl)

export const getAllSeminars = async () => await axios.get(baseUrl);