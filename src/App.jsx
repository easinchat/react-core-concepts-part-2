import Counter from "./counter";

import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Batsman from "./Batsman";
import Bowling from "./bowling";
import Users from "./user";
import { Suspense } from "react";
import Friends from "./friends";
import Posts from "./posts";
import Albums from "./albums";
import Tasks from "./tasks";
import Tasks2 from "./tasks2";
import Show from "./show";
import Apis from "./apis";
// const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json(),
// );
// const fetchFriend = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };
// const fetchPost = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };
const fetchAlbums = fetch("https://jsonplaceholder.typicode.com/albums").then(
  (res) => res.json(),
);

function App() {
  // const friendsPromise = fetchFriend();
  // const postsPromise = fetchPost();

  function handleClick() {
    alert("I am Clicked");
  }
  const handleClick2 = () => {
    alert("Second time i am clicked");
  };
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  const fetchAPi = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json(),
  );
  return (
    <>
      <h1>Last complete</h1>
      <Suspense fallback={<p>Looding...</p>}>
        <Apis fetchAPi={fetchAPi}></Apis>
      </Suspense>

      <Show></Show>
      <h1>Task 1</h1>
      <Tasks></Tasks>
      <Tasks2></Tasks2>

      {/* <Suspense fallback={<h2>Loding.....</h2>}>
        <Albums fetchAlbums={fetchAlbums}></Albums>
      </Suspense> */}

      {/* <Suspense fallback={<h3>loding</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Loding...</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Friends are coming for treat</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <Bowling></Bowling>
      <Batsman></Batsman>
      <h1>Get started</h1>
      <Counter></Counter>
      <div>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleClick2}>Click me</button>
        <button onClick={() => handleAdd5(10)}>Click Me</button>
      </div>
    </>
  );
}

export default App;
