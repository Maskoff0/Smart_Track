import { getfiles} from "./assignments.js";
import { useState , useEffect } from "react";

export const usefiles = () => {
    const [files , setfiles] = useState([])
    const [success , setSuccess] = useState("")
    const [isLoading , setisLoading] = useState(false)
    const [error , setError] = useState("")

    const files_data = async () => {
        try{
            setisLoading(true)
            setError("")

            const data = await getfiles()
            setfiles(data.data)
            console.log(data)

        } catch (err) {
            setError("Failed to fetch files")
        } finally {
            setisLoading(false)
        }



    }
    useEffect(() => {
         files_data()
    }, [])

    return {
        files,
        success,
        isLoading,
        error,
        refreshFiles: files_data
    }
}