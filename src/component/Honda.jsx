import React from "react";
import "./Honda.css";
import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import honda from "../image/honda.png";
import honda1 from "../image/honda1.png";
import honda2 from "../image/honda2.png";
import honda3 from "../image/honda3.webp";
import honda4 from "../image/honda4.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../image/logo.png";

const drawerWidth = 240;
const navItems = ["Contact"];

const cars = [
  { id: 1, model: "2022 Honda", price: 3000, image: honda },
  { id: 2, model: "2022 Honda", price: 3000, image: honda1 },
  { id: 3, model: "2023 Honda", price: 6000, image: honda2 },
  { id: 4, model: "2023 Honda", price: 6000, image: honda3 },
  { id: 5, model: "2024 Honda", price: 10000, image: honda4 },
  { id: 6, model: "2024 Honda", price: 10000, image: honda },
];

function Honda(props) {
  const navigate = useNavigate();
  const [value, setValue] = useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontWeight: 700,
          fontFamily: "Arial, sans-serif",
          fontSize: "1.5rem",
        }}
      >
        Blinker
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const validModels = ["toyota", "honda", "mazda"];

    if (validModels.includes(lowerCaseSearchTerm)) {
      navigate(`/${lowerCaseSearchTerm}`);
    } else {
      navigate("/page404");
    }
  };

  const filteredCars = cars.filter(
    (car) => car.price >= value[0] && car.price <= value[1]
  );

  return (
    <>
      <Box className="honda-background-img">
        <Box sx={{ display: "flex", color: "black" }}>
          <AppBar
            component="nav"
            position="static"
            sx={{ backgroundColor: "transparent", color: "black" }}
          >
            <Toolbar>
              <IconButton
                color="black"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                ml={5}
                sx={{
                  display: { xs: "none", sm: "block", fontWeight: "700" },
                  color: "white",
                  fontWeight: 700,
                  fontFamily: "Arial, sans-serif",
                  fontSize: "1.5rem",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "23px", marginRight: "1px" }}
                />
                Blinker
              </Typography>
              <Box
                mr={5}
                sx={{
                  marginLeft: "auto",
                }}
              >
                <Typography
                  onClick={() => navigate("/")}
                  className="curoser-pointer"
                  sx={{ fontWeight: 600, color: "white" }}
                >
                  Home
                </Typography>
              </Box>
              <Box mr={5}>
                <Typography
                  className="curoser-pointer"
                  sx={{ fontWeight: 600, color: "white" }}
                >
                  Find your car
                </Typography>
              </Box>
              <Box mr={5} sx={{ display: { xs: "none", sm: "block" } }}>
                <Button
                  className="curoser-pointer"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Contact
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
          <Typography
            className="honda-heading"
            variant="h3"
            sx={{
              color: "white",
              fontWeight: 700,
              fontFamily: "Arial, sans-serif",
              fontSize: "2rem",
            }}
          >
            Browse our cars
          </Typography>
          <Typography variant="h4">
            <input
              type="text"
              placeholder="Search by model"
              className="honda-field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Typography onClick={handleSearch}>
              <SearchIcon className="honda-search-icon" />
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box className="price-range">
        <Typography mt={7}>Price range: $0 to $10,000</Typography>
        <Box width="16%" ml={"auto"} mt={2}>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={10000}
            step={100}
          />
        </Box>
        <Typography size="small" sx={{ textAlign: "end" }}>
          ${value[0]} - ${value[1]}
        </Typography>
      </Box>

      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          columnSpacing={3}
          rowSpacing={3}
        >
          {filteredCars.map((car) => (
            <Grid item xs={12} sm={6} md={4} mt={1} key={car.id}>
              <Card>
                <CardActionArea className="card-action">
                  <CardMedia
                    component="img"
                    height="185"
                    image={car.image}
                    alt={car.model}
                  />
                  <Box className="overlay">
                    <Typography variant="body2" color="textSecondary">
                      More Info
                    </Typography>
                    <ArrowForwardIcon />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 700,
                        fontFamily: "Arial, sans-serif",
                        fontSize: "1.25rem",
                      }}
                    >
                      {car.model}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      POWERTRAIN Standard All-Wheel
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      SPECIAL EDITION Nightshade
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      HORSEPOWER Up to 340
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 700,
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      ${car.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Honda;
