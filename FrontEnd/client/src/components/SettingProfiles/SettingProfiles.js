import {
  Box,
  Grid,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import * as React from "react";

const SettingProfiles = () => {
  const navigate = useNavigate()
  return (
    <Container
      sx={{
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <h1> Profile</h1>
      <Box
        display={"flex"}
        sx={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "15%", textAlign: "left", minWidth: 120 }}>
          <h3>Username:</h3>
        </Box>
        <Box sx={{ width: "20%", textAlign: "left" }}>
          <Typography sx={{ background: "white" }} fullWidth size="small" />{" "}
          Name
        </Box>
      </Box>
      <Box
        display={"flex"}
        sx={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "15%", textAlign: "left", minWidth: 120 }}>
          <h3>Email:</h3>
        </Box>
        <Box sx={{ width: "20%", textAlign: "left" }}>
          <Typography sx={{ background: "white" }} fullWidth size="small" />{" "}
          testemail@gmail.com
        </Box>
      </Box>
      <Box
        display={"flex"}
        sx={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "15%", textAlign: "left", minWidth: 120 }}>
          <h3>Password:</h3>
        </Box>
        <Box sx={{ width: "20%", textAlign: "left" }}>
          <Typography sx={{ background: "white" }} fullWidth size="small" />{" "}
          ************
        </Box>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Button
          variant="contained"
          color="success"
          sx={{
            height: 50,
            width: 120,
          }}
          onClick={() => navigate('/home/update-profile')}
        >
          Update
        </Button>
      </Box>
    </Container>
  );
};

export default SettingProfiles;
