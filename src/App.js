import { useState } from "react";
import store from "./store";
import "./App.css";
import Card from "./Card";
import Form from "./Form";

function App() {
  const [titles, setTitles] = useState([]);
  const unsubscribe = store.subscribe(() => {
    setTitles(store.getState());
  });

  console.log(titles);
  return (
    <div className="App">
      <Form />
      <ul>
        {titles.map((elem) => (
          <Card key={elem.id}>{elem.title}</Card>
        ))}
      </ul>
    </div>
  );
}

export default App;
