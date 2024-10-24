import "./App.css";
import NestedComments from "./components/nested-comments";
import commentsData from "./data/comments.json";
import Login from "./components/Login"

function App() {
  return (
    <div>
      <h1>Nested Comment System</h1>
      <NestedComments
        comments={commentsData}
        onSubmit={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        // onUpvote={() => {}}
        // onDownvote={() => {}}
      />
      <Login />
    </div>
  );
}

export default App;
