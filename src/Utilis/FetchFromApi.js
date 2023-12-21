import axios from "axios";
const BASE_URL="https://youtube-v31.p.rapidapi.com"
const options = {
    
    url: BASE_URL ,
    params: {
     maxResults:"50"
    },
    headers: {
      'X-RapidAPI-Key': "54d22709a5msh4ca8729f08123fcp1be560jsn3ed2a02b1d1f",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchFromApi = async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);
    return data
  }