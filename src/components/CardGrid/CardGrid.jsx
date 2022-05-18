import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/axios.info";

export default function MediaCard({name ,sprites }) {
  
  
  const dispatch = useDispatch();
  const isMounted = React.useRef(false);

  const [poke, setPoke] = React.useState(null);

  // React.useEffect(() => {
  //   if (!poke && isMounted.current) {
  //     const fetchData = async () => {
  //       const response = await axios.get(url);
  //       const res = response.data;
  //       setPoke((poke) => res);
  //     };
  //     fetchData().catch(console.error);
  //   } else {
  //     isMounted.current = true;
  //   }
  // }, []);

  const LearnMore = () => {};
  return (
    <Card sx={{ maxWidth: 345, m: "0 auto" }}>
      {sprites && (
        <CardMedia
          component="img"
          height="140"
          image={
            sprites
              ? `${sprites.front_default}`
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
        <Button onClick={LearnMore} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
