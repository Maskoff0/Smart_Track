import axios from "axios"


const URL = "http://localhost:5000/field"


export const getfiles = async () => {
    const res = await axios.get(URL)
    return res.data
}