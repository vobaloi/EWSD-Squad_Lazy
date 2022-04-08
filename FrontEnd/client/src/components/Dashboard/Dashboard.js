import { Paper, Box } from "@mui/material";
import React from "react";


import Typography from "@mui/material/Typography";

const Dashboard = () => {
  return (
    <>
      <Paper elevation={8} sx={{ height: "auto", marginTop: 1 }}>
        <Typography variant="h4">Data Analysis</Typography>
        <Box>
          <Box
            sx={{
              borderTop: 2,
              borderBottom: 2,
              height: 199,
              background: "#1976D2",
              alignItems: "center",
            }}
            display={"flex"}
          >
            <Box
              sx={{
                width: "25%",
                borderRight: 2,
                textAlign: "center",
                color: "white",
              }}
            >
              <Typography variant="h4" mb={2}>
                Users
              </Typography>
              <Typography variant="h4">100</Typography>
            </Box>
            <Box
              sx={{
                width: "25%",
                borderRight: 2,
                textAlign: "center",
                color: "white",
              }}
            >
              <Typography variant="h4" mb={2}>
                Users
              </Typography>
              <Typography variant="h4">100</Typography>
            </Box>
            <Box
              sx={{
                width: "25%",
                borderRight: 2,
                textAlign: "center",
                color: "white",
              }}
            >
              <Typography variant="h4" mb={2}>
                Users
              </Typography>
              <Typography variant="h4">100</Typography>
            </Box>
            <Box sx={{ width: "25%", textAlign: "center", color: "white" }}>
              <Typography variant="h4" mb={2}>
                Users
              </Typography>
              <Typography variant="h4">100</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h4">Chart</Typography>
          <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
            <Box sx={{ width: "45%" }}>
            </Box>
            <Box sx={{ width: "45%" }}>


            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default Dashboard;
