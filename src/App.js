import './App.css';
import {Routes, Route} from "react-router-dom";
import { Box } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';
import {ChannelDetail , VideoDetail, SearchFeed, Feed, Navbar} from "./components/Allcomponents"

function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: "#000"}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
