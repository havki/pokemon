import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardContent, CardMedia } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/axios.info";
import Loading from "../../UI/Loading";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  zIndex: 9999,
};

function PokeCard({ close, pokemonUrl }) {
  const [pokeInfo, setPokeInfo] = React.useState(null);

  

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(pokemonUrl.url);
      const res = response.data;
      setPokeInfo(res);
    };
    fetchData().catch(console.error);
  }, []);

  if (pokeInfo) {
    
  }

  
  if (!pokeInfo) {
    return <Loading />;
  }

  return (
    <div>
      <Modal
        open={true}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography gutterBottom variant="h3" component="div">
            {pokemonUrl.name}
          </Typography>
          <CardMedia
            component="img"
            height="300"
            image={
              pokeInfo
                ? `${pokeInfo.sprites.other["official-artwork"].front_default}`
                : "https://xn--90aha1bhcc.xn--p1ai/img/placeholder.png"
            }
            alt="green iguana"
          />
          <CardContent></CardContent>

          {pokeInfo.types.map((item) => {
            return (
              <Typography gutterBottom variant="h5" component="div">
                Force {item.slot} : {item.type.name}
              </Typography>
            );
          })}

          <Button size="small" onClick={() => close(false)}>
            OK
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default PokeCard;
