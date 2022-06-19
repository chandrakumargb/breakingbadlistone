import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://breakingbadapi.com/api/characters")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  });
  console.log("data", data);

  return (
    <div className="App">
      <h1>BREAKING <br></br>  BAD </h1>
      {data.map((item) => (
        <div>
          <Card
            img={item.img}
            name={item.name}
            char_id={item.char_id}
            birthday={item.birthday}
            nickname={item.nickname}
            occupation={item.occupation[0]}
          />
        </div>
      ))}
    </div>
  );
}

export default App;