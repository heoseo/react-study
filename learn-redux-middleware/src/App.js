import React from "react";
import { Route } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import CounterContainer from "./containers/CounterContainer";
import PostListContainer from "./containers/PostListContainer";

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <PostListContainer />
      <hr />
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
