import React, { useState } from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import city from "../image/city.png";
import { useNavigate } from "react-router-dom";
import Navbars from "./Navbars";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const validModels = ["toyota", "honda", "mazda"];

    if (validModels.includes(lowerCaseSearchTerm)) {
      navigate(`/${lowerCaseSearchTerm}`);
    } else {
      navigate("/page404");
    }
  };

  return (
    <>
      <Navbars />
      <Box className="home-content">
        <Box>
          <Typography
            className="home-text"
            variant="h3"
            sx={{ fontWeight: 700 }}
          >
            Australia's most awarded <br /> car subscription platform
          </Typography>
        </Box>

        <Typography className="home-text-1" mt={2} sx={{ fontWeight: 600 }}>
          FIND YOUR DREAM CAR WITH <span>BLINKER</span>
        </Typography>
        <Typography mt={5} sx={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Search by model"
            className="text-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <SearchIcon className="home-search-icon" />
          </button>
        </Typography>
      </Box>

      <Box className="home-img">
        <img src={city} alt="City" />
      </Box>
    </>
  );
}

export default Home;
