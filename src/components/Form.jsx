import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Form({ name = "", imageURL = "", description = "" }) {
  const [creator, setCreator] = useState({
    name,
    image: imageURL,
    description,
  });

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.id]: e.target.value });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
        backgroundColor: "white",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        error={creator.name ? false : true}
        id="name"
        label="Name"
        defaultValue=""
        onChange={handleChange}
      />
      <TextField
        error={creator.image ? false : true}
        id="image"
        label="Image"
        defaultValue=""
        onChange={handleChange}
      />
      <TextField
        error={creator.description ? false : true}
        id="description"
        label="Description"
        defaultValue=""
        onChange={handleChange}
      />
    </Box>
  );
}
