import axios from "axios"

const API_URL = "https://smart-season-backend-ecq6.onrender.com"

const URL = `${API_URL}/field`


export const getfiles = async () => {
    const res = await axios.get(URL)
    return res.data
}