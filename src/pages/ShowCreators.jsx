import { useState, useEffect } from "react";
import supabase from "../client";
import CreatorCard from "../components/CreatorCard";

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const fetchCreators = async () => {
    try {
      const { data, error } = await supabase.from("creators").select("*");
      if (!data) throw error;
      setCreators(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCreators();
  }, []);

  return (
    <div className="flex gap-2 flex-wrap">
      {creators.map((creator) => {
        return <CreatorCard creator={creator} />;
      })}
    </div>
  );
}
