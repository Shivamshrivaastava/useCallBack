import { useEffect, useState } from "react";

export const CallB = () => {
  const [state, setState] = useState([]);

  async function GetData() {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/todos/");
      data = await data.json();
      setState([...data]);
    } catch (error) {
      console.error(error); 
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <ul>
        {state.map((ele) => {
          return <li key={ele.id}>{ele.title}</li>;
        })}
      </ul>
    </div>
  );
};
