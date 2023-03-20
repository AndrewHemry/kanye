import React from "react";
import "../Components/Kanye.css";
import KanyeOne from "../Images/one.png";
import KanyeTwo from "../Images/two.png";
import KanyeThree from "../Images/3.png";
import KanyeVideo from "../Images/kanye.mp4";

export default function Kanye(props) {
  return (
    <>
      <div id="image-container">
        {props.location === "Paris" && (
          // <video autoPlay muted loop className="kanye-image">
          //   <source src={KanyeVideo} type="video/mp4" />
          // </video>
          <img className="kanye-image" alt="kanye west" src={KanyeOne} />
        )}
        {props.location === "Egypt" && (
          <img className="kanye-image" alt="kanye west" src={KanyeTwo} />
        )}
        {props.location === "USA" && (
          <img className="kanye-image" alt="kanye west" src={KanyeThree} />
        )}
      </div>
    </>
  );
}

// {online === false && (
//     <p>
//       Your application is offline. You won't be able to share or stream
//       music to other devices.
//     </p>
//   )}
