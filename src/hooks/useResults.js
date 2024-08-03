import { useEffect, useState } from "react";
import yelp from "../api/yelp";


export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')


    const searchAPI = async (searchTerm) => {
        console.log("Hi There");
        try{ 
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'San jose'
                }
            })
            // console.log("Respnse");
            // console.log(response);
            setResults(response.data.businesses)
            setErrorMessage("")

        }catch(e){
            setErrorMessage("Something went wrong!")
            console.log(e);
        }
    }

    //Call Search API when component 
    //is first rendered
    //searchAPI("pasta")

    useEffect(() => {
        searchAPI("pasta")
    }, [])

    return [searchAPI, results, errorMessage]

}