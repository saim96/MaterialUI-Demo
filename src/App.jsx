import "./App.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import RatingDemo from "./RatingDemo";
import FormDemo from "./FormDemo";
import NavBar from "./NavBar.component";

function App() {
  return (
    <div>
    <NavBar/>
    <FormDemo/>
      <Button />
      <IconButton />
      <AlarmIcon />
      <RatingDemo />
    </div>
  );
}

export default App;
