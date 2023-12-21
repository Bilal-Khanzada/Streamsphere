import axios from "axios";
const BASE_URL="https://youtube-v31.p.rapidapi.com"

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    maxResults: "50"
  },
  headers: {
    'X-RapidAPI-Key': '54d22709a5msh4ca8729f08123fcp1be560jsn3ed2a02b1d1f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


  export const FetchFromApi = async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);
    return data
  }