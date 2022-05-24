import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  CardContent,
  CardMedia,
  FormControlLabel,
  FormGroup,
  Rating,
  Stack,
  Switch,
} from "@mui/material";
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

const labels = {
  1: "basic",
  2: "advanced",
  3: "strength",
  4: "legendary",
  5: "myth",
};

function PokeCard({ close, pokemonUrl, newPictureReqProof = [false, false] }) {
  const [pokeInfo, setPokeInfo] = React.useState(null);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(pokemonUrl.url);
      const res = response.data;

      !newPictureReqProof[1] && setPokeInfo(res);
      if (newPictureReqProof[1]) {
        const megaResponse = await axios.get(res.pokemon.url);
        setPokeInfo(megaResponse.data);
      }
    };
    fetchData().catch(console.error);
  }, []);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  if (!pokeInfo) {
    return <Loading />;
  }

  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h4" component="div">
              {pokemonUrl.name}
            </Typography>
            <Stack direction='column'>

            <Rating
              name="read-only"
              value={pokeInfo.base_experience / 50}
              readOnly
              size="large"
            />
            <Typography  variant="h6" align="right" component="div">
              {labels[Math.round(pokeInfo.base_experience / 50)]}
            </Typography>
            </Stack>
          </Stack>
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
          <FormGroup sx={{ marginLeft: "50%" }}>
            <FormControlLabel
              labelPlacement="top"
              control={
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Hidden"
            />
          </FormGroup>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="column">
              {pokeInfo.types.map((item) => {
                return (
                  <Typography gutterBottom variant="h6" component="div">
                    Force {item.slot} : {item.type.name}
                  </Typography>
                );
              })}
            </Stack>
            <Stack direction="column" justifyContent="flex-end">
              {checked &&
                pokeInfo.abilities.map((item, index) => {
                  return (
                    <Typography gutterBottom variant="h6" component="div">
                      {index + 1}: {item.ability.name}
                    </Typography>
                  );
                })}
            </Stack>
          </Stack>

          <Button size="small" onClick={() => close()}>
            OK
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default PokeCard;

{
  /* <FormGroup>
                <FormControlLabel
                labelPlacement='top'
                  control={
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Hidden"
                />
              </FormGroup> */
}
