import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useParams, Link } from "react-router-dom";
import supabase from "../client";

export default function DetailCard({ creator }) {
  const { id } = useParams();

  const handleDelete = async () => {
    await supabase.from("creators").delete().eq("id", id);
    window.location = "/";
  };

  return (
    <div>
      <h1>Detail Page</h1>
      <Card sx={{ width: 345, padding: "10px" }}>
        <Avatar
          alt="Remy Sharp"
          src={creator.imageURL}
          sx={{ width: 200, height: 200 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {creator.name}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <a
              href={`https://www.instagram.com/${creator.url}`}
              target="_blank"
            >
              @{creator.url}
            </a>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {creator.description}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            <strong>Created at:</strong> {creator.created_at ?? null}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/edit/${id}`}>Edit</Link>
          <Button onClick={handleDelete}>Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
}
