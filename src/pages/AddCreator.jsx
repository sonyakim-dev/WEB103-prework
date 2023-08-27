import { useState } from "react";
import supabase from "../client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function AddCreator() {
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    imageURL: "",
    description: "",
  });

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.id]: e.target.value });
    console.log(creator);
  };

  const handleSubmit = async () => {
    if (
      creator.name === "" ||
      creator.url === "" ||
      creator.imageURL === "" ||
      creator.description === ""
    ) {
      return null;
    }
    try {
      await supabase.from("creators").insert(creator);
    } catch (error) {}
    window.location = "/";
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
        required
        id="name"
        label="Name"
        defaultValue=""
        onChange={handleChange}
      />
      <TextField
        required
        id="url"
        label="Instagram"
        defaultValue=""
        onChange={handleChange}
      />
      <TextField
        required
        id="imageURL"
        label="Image"
        defaultValue=""
        onChange={handleChange}
      />
      <TextField
        required
        id="description"
        label="Description"
        defaultValue=""
        onChange={handleChange}
      />
      <div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Box>
  );
}
