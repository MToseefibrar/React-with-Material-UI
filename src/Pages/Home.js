import React from "react";
import Sidebar from "../Components/Header/Components/Sidebar";
import Navbar from "../Components/Header/Components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "../App.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Accordiondash from "../Components/Header/Components/Accordiondash";
import BarChart from "../Charts/BarChart";
import CountUp from "react-countup";

function Home() {
  return (
    <>
      <div className="gbColor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card sx={{ minWidth: 300 }} className="gradient">
                    <CardContent>
                      <div className="iconcolor">
                        <CreditCardIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        <CountUp delay={0.2} end={1000} duration={0.5} />
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 220 }} className="gradientlight">
                    <CardContent>
                      <div className="iconcolor">
                        <ShoppingBagIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                      <CountUp delay={0.2} end={1500} duration={0.5} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Order
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }} className="gradientlight">
                    <Typography gutterBottom variant="h5" component="div">
                      <Stack spacing={2} direction="row">
                        <div className="iconS">
                          <StorefrontIcon className="iconcolor" />
                        </div>
                        <div className="padding">
                          <span className="price">203k</span>
                          <br />
                          <span className="subprice">Monthly Income</span>
                        </div>
                      </Stack>
                    </Typography>
                  </Card>

                  <Card sx={{ maxWidth: 345 }}>
                    <Stack spacing={2} direction="row">
                      <div className="iconS">
                        <StorefrontIcon />
                      </div>
                      <div className="padding">
                        <span className="price">203k</span>
                        <br />
                        <span className="subprice">Monthly Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
              <Box height={10} />

              <Grid item xs={8}>
                <Card sx={{ height: 55 + "vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 55 + "vh" }}>
                  <CardContent>
                    <Accordiondash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
export default Home;
