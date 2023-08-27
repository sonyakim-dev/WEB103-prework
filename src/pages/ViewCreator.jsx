import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import supabase from "../client";
import DetailCard from "../components/DetailCard";

export default function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    imageURL: "",
    description: "",
    created_at: "",
  });

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
        created_at: data.created_at,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCreator();
  }, []);

  return <DetailCard creator={creator} />;
}
