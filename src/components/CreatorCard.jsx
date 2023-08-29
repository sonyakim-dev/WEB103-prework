import {} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export default function CreatorCard({ creator }) {
  return (
    <Card sx={{ width: 300, padding: "10px" }}>
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
          <a href={`https://www.instagram.com/${creator.url}`} target="_blank">
            @{creator.url}
          </a>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`detail/${creator.id}`}>Detail</Link>
      </CardActions>
    </Card>
  );
}
