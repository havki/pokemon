import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "../../api/axios.info";

export default function MediaCard({ name, sprites, learnMore, pokemon, }) {
  const [poke, setPoke] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(pokemon.url);
      const res = response.data;
      setPoke((poke) => res);
    };
    fetchData().catch(console.error);
   
  }, [poke]);

  


  return (
    <Card sx={{ maxWidth: 345, m: "0 auto" }}>
      {poke && (
        <CardMedia
          component="img"
          height="200"
          image={
            poke
              ? `${poke.sprites.other.home.front_default}`
              : "https://xn--90aha1bhcc.xn--p1ai/img/placeholder.png"
          }
          alt="green iguana"
        />
      )}

      <CardContent>
        <Typography gutterBottom variant="h8" component="div">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => learnMore(pokemon, false)} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
