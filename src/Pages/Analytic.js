import React from "react";
import Sidebar from "../Components/Header/Components/Sidebar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { GeoChart } from "./GeoChart";
import { PieChart } from "./PieChart";
import Accordiondash from "../Components/Header/Components/Accordiondash";
import CountUp from "react-countup";

function Analytic() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 280 }} className="gradientlight">
                  <Typography gutterBottom variant="h5" component="div">
                    <Stack spacing={2} direction="row">
                      <div className="iconS">
                        <StorefrontIcon className="iconcolor" />
                      </div>
                      <div className="padding">
                        <span className="price">
                          <CountUp delay={0.2} end={46000} duration={0.5} />
                        </span>
                        <br />
                        <span className="subprice">Monthly Income</span>
                      </div>
                    </Stack>
                  </Typography>
                </Card>

                <Card sx={{ maxWidth: 280 }}>
                  <Stack spacing={2} direction="row">
                    <div className="iconS">
                      <StorefrontIcon />
                    </div>
                    <div className="padding">
                      <span className="price">
                        <CountUp delay={0.2} end={22000} duration={0.5} />
                      </span>
                      <br />
                      <span className="subprice">Monthly Income</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
            <Box height={10} />

            <Grid item xs={8}>
              <Card sx={{ height: 40 + "vh" }}>
                <CardContent>
                  <PieChart />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={8}>
              <Card sx={{ height: 40 + "vh" }}>
                <CardContent>
                  <GeoChart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 40 + "vh" }}>
                <CardContent>
                  <Accordiondash />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
export default Analytic;
