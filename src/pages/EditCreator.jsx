import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function EditCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    imageURL: "",
    description: "",
  });

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.id]: e.target.value });
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
      await supabase.from("creators").update(creator).eq("id", id);
    } catch (error) {
      console.log(error);
    }
    window.location = "/";
  };

  const fetchCreator = async () => {
    try {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();
      if (!data) throw error;
      setCreator({
        name: data.name,
        url: data.url,
        imageURL: data.imageURL,
        description: data.description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCreator();
  }, []);

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
        value={creator.name}
        onChange={handleChange}
      />
      <TextField
        required
        id="url"
        label="Instagram"
        value={creator.url}
        onChange={handleChange}
      />
      <TextField
        required
        id="imageURL"
        label="Image"
        value={creator.imageURL}
        onChange={handleChange}
      />
      <TextField
        required
        id="description"
        label="Description"
        value={creator.description}
        onChange={handleChange}
      />
      <div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Box>
  );
}
