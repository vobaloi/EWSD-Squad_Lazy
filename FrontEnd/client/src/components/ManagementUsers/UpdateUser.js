  import {
    Box,
    Grid,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    Button,
  } from "@mui/material";
  import * as React from "react";

  const UpdateUser = () => {
    const [role, setRole] = React.useState("");

    const handleChange = (event) => {
      setRole(event.target.value);
    };
    return (
      <Grid
        sx={{
          width: "80%",
          height: 600,
          backgroundColor: "#F9CB9C",
          margin: "50px auto",
          borderRadius: 15,
          border: 1,
          textAlign: "center",
        }}
      >
        <h1> Update User</h1>
        <Box
          display={"flex"}
          sx={{
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "15%", marginLeft: 10, textAlign: "left" }}>
            <h3>Username:</h3>
          </Box>
          <Box sx={{ width: "70%" }}>
            <TextField sx={{ background: "white" }} fullWidth size="small" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          sx={{
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "15%", marginLeft: 10, textAlign: "left" }}>
            <h3>Email:</h3>
          </Box>
          <Box sx={{ width: "70%" }}>
            <TextField sx={{ background: "white", opacity:"0.7"}} fullWidth size="small" disabled/>
          </Box>
        </Box>
        <Box
          display={"flex"}
          sx={{
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "15%", marginLeft: 10, textAlign: "left" }}>
            <h3>Password:</h3>
          </Box>
          <Box sx={{ width: "70%" }}>
            <TextField
              sx={{ background: "white" }}
              fullWidth
              size="small"
              type={"password"}
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          sx={{
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "15%", marginLeft: 10, textAlign: "left" }}>
            <h3>Telephone:</h3>
          </Box>
          <Box sx={{ width: "70%" }}>
            <TextField sx={{ background: "white" }} fullWidth size="small" />
          </Box>
        </Box>
        <Box display={"flex"}>
          <Box sx={{ width: "15%", marginLeft: 10, textAlign: "left" }}>
            <h3>Role:</h3>
          </Box>
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Role"
                sx={{background:'white'}}
                onChange={handleChange}
              >
                <MenuItem>Admin</MenuItem>
                <MenuItem>Manager</MenuItem>
                <MenuItem>Coordinator</MenuItem>
                <MenuItem>Staff</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Grid sx={{ textAlign: "center" }}>
          <Box
            display={"flex"}
            sx={{
              mt:5,
              justifyContent: "space-between",
            }}
          >
            <Box sx={{width:'50%'}}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  ml:9,
                  height: 50,
                  width: 120,
                }}
              >
                Save
              </Button>
            </Box>
            <Box  sx={{width:'50%'}}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  height: 50,
                  width: 120,
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  };

  export default UpdateUser;
