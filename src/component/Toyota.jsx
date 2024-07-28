import React from "react";
import "./Toyota.css";
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
import downloadImage from "../image/download (1).png";
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
import CssBaseline from "@mui/material/CssBaseline";
const drawerWidth = 240;
const navItems = ["Contact"];

function Toyota(props) {
  const navigate = useNavigate();
  const [value, setValue] = useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
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

  return (
    <>
      <Box className="toyota-background-img">
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
                }}
              >
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
            className="toyota-heading"
            variant="h3"
            sx={{ color: "white" }}
          >
            Browse our cars
          </Typography>
          <Typography variant="h4">
            <input
              type="text"
              placeholder="Search by Model"
              className="toyota-field"
            />
            <SearchIcon className="toyota-search-icon" />
          </Typography>
        </Box>
      </Box>
      <Box className="price-range">
        <Typography mt={7}>Price range: $0 to $100,000</Typography>
        <Box width="22%" ml={"auto"} mt={2}>
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
          ${value[0]} ${value[1]}
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
          <Grid item xs={12} sm={6} md={4} mt={1}>
            <Card>
              <CardActionArea className="card-action">
                <CardMedia
                  component="img"
                  height="140"
                  image={downloadImage}
                  alt="Toyota"
                />
                <Box className="overlay">
                  <Typography variant="body2" color="textSecondary">
                    More Info
                  </Typography>
                  <ArrowForwardIcon />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    2024 Toyota Kluger
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
                  <Typography variant="h6" component="div">
                    $29,380
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mt={1}>
            <Card>
              <CardActionArea className="card-action">
                <CardMedia
                  component="img"
                  height="140"
                  image={downloadImage}
                  alt="Toyota"
                />
                <Box className="overlay">
                  <Typography variant="body2" color="textSecondary">
                    More Info
                  </Typography>
                  <ArrowForwardIcon />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    2024 Toyota Kluger
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
                  <Typography variant="h6" component="div">
                    $29,380
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mt={1}>
            <Card>
              <CardActionArea className="card-action">
                <CardMedia
                  component="img"
                  height="140"
                  image={downloadImage}
                  alt="Toyota"
                />
                <Box className="overlay">
                  <Typography variant="body2" color="textSecondary">
                    More Info
                  </Typography>
                  <ArrowForwardIcon />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    2024 Toyota Kluger
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
                  <Typography variant="h6" component="div">
                    $29,380
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mt={1}>
            <Card>
              <CardActionArea className="card-action">
                <CardMedia
                  component="img"
                  height="140"
                  image={downloadImage}
                  alt="Toyota"
                />
                <Box className="overlay">
                  <Typography variant="body2" color="textSecondary">
                    More Info
                  </Typography>
                  <ArrowForwardIcon />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    2024 Toyota Kluger
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
                  <Typography variant="h6" component="div">
                    $29,380
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mt={1}>
            <Card>
              <CardActionArea className="card-action">
                <CardMedia
                  component="img"
                  height="140"
                  image={downloadImage}
                  alt="Toyota"
                />
                <Box className="overlay">
                  <Typography variant="body2" color="textSecondary">
                    More Info
                  </Typography>
                  <ArrowForwardIcon />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    2024 Toyota Kluger
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
                  <Typography variant="h6" component="div">
                    $29,380
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mt={1}>
            <Card>
              <CardActionArea className="card-action">
                <CardMedia
                  component="img"
                  height="140"
                  image={downloadImage}
                  alt="Toyota"
                />
                <Box className="overlay">
                  <Typography variant="body2" color="textSecondary">
                    More Info
                  </Typography>
                  <ArrowForwardIcon />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    2024 Toyota Kluger
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
                  <Typography variant="h6" component="div">
                    $29,380
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Toyota;
