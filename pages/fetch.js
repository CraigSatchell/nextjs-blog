import React from "react";
import { useEffect, useState } from "react";

const FetchJSON = ({ todos }) => {
  const [posts, setPosts] = useState();

  return (
    <div>
      FetchJSON
      <h1>Todos</h1>
      <ul>
        {todos.length > 0
          ? todos.map((todo, index) => <li key={index}>{todo.title}</li>)
          : "No todos"}
      </ul>
    </div>
  );
};


export async function getStaticProps() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/todos");
  const todos = await response.json();
  console.log("TODOS:", todos);

  return {
    props: {
      todos,
    },
  };
}


export default FetchJSON;
