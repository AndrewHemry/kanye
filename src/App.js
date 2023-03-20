// import { useState, useEffect, useRef } from "react";
// import "./App.css";
// import RadioButtonsGroup from "./Components/Location";
// import Kanye from "./Components/Kanye";
// import USAImage from "./newYork.jpg";
// import EgyptImage from "./egypt.jpg";
// import ParisImage from "./paris.jpg";

// function App() {
//   const [location, setLocation] = useState("USA");

//   function setBackground() {
//     const appDiv = appRef.current;
//     if (appDiv) {
//       appDiv.style.backgroundImage =
//         location === "Paris"
//           ? `url(${ParisImage})`
//           : location === "USA"
//           ? `url(${USAImage})`
//           : `url(${EgyptImage})`;
//     }
//   }

//   useEffect(() => {
//     setBackground();
//   }, [setBackground]);

//   // useState(() => {
//   //   setBackground();
//   // }, [location]);

//   return (
//     <>
//       <div className="App" style={{ backgroundImage: `url(${ParisImage})` }}>
//         <RadioButtonsGroup location={location} setLocation={setLocation} />
//         <Kanye location={location} />
//       </div>
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import "./App.css";
import RadioButtonsGroup from "./Components/Location";
import Kanye from "./Components/Kanye";
import USAImage from "./newnewyork.jpg";
import EgyptImage from "./egypt.jpg";
import ParisImage from "./paris.jpg";

function App() {
  const [location, setLocation] = useState("USA");

  useEffect(() => {
    const appDiv = document.querySelector(".App");
    if (appDiv) {
      appDiv.style.backgroundImage =
        location === "Paris"
          ? `url(${ParisImage})`
          : location === "USA"
          ? `url(${USAImage})`
          : `url(${EgyptImage})`;
    }
  }, [location]);

  return (
    <>
      <div className="App">
        <RadioButtonsGroup location={location} setLocation={setLocation} />
        <Kanye id="kanye" location={location} />
      </div>
    </>
  );
}

export default App;
