import Rating from "@mui/material/rating";
import { useState } from "react";
export default function RatingDemo() {
  const [score, setScore] = useState(3);

  const handChange = (event, newValue) => {
    setScore(newValue);
  }
  return (
    <div>
      <h1>Rating Demo. Current Score: {score}</h1>
      <Rating
        name="simple-controlled"
        value={score}
        onChange={handChange}
      />
    </div>
  );
}
