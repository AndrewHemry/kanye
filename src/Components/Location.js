import * as React from "react";
import "../Components/Location.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import useSound from "use-sound";
import Music from "../Music/paris.mp3";
import GeorgeBush from "../Music/gbKanye.mp3";
import Egypt from "../Music/egypt.mp3";

export default function RadioButtonsGroup(props) {
  const handleChange = (event) => {
    props.setLocation(event.target.value);
    if (event.target.value === "Paris") {
      playOne();
    } else {
      stop();
    }
    if (event.target.value === "USA") {
      playTwo();
    }
    if (event.target.value === "Egypt") {
      playThree();
    }
  };
  const [playOne, { stop }] = useSound(Music, { volume: 0.25 });
  const [playTwo] = useSound(GeorgeBush);
  const [playThree] = useSound(Egypt);
  return (
    <FormControl id="location-form-container">
      <FormLabel id="demo-radio-buttons-group-label">Location</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={handleChange}
        id="location-form"
        sx={{ justifyContent: "space-evenly" }}
      >
        <FormControlLabel value="USA" control={<Radio />} label="USA" />
        <FormControlLabel value="Egypt" control={<Radio />} label="Egypt" />
        <FormControlLabel value="Paris" control={<Radio />} label="Paris" />
      </RadioGroup>
    </FormControl>
  );
}
