import { useState } from "react";
import store from "./store";
import "./App.css";
import Card from "./Card";
import Form from "./Form";

function App() {
  const [titles, setTitles] = useState([]);
  console.log(store.getState());
  return (
    <div className="App">
      <Form prev={titles} addTitle={setTitles} />
      <ul>
        {titles.map((title, id) => (
          <Card key={id}>{title}</Card>
        ))}
      </ul>
    </div>
  );
}

export default App;
