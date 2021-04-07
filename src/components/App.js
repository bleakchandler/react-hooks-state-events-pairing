import video from "../data/video.js";
import Header from "./Header"
import Buttons from "./Buttons"
import CommentList from "./CommentList"
import HideButton from "./HideButton"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Header
        title={video.title}
        views={video.views}
        date={video.createdAt}
      />

      <Buttons
        likes={video.upvotes}
        dislikes={video.downvotes}
      />
      <hr />
      <HideButton
        comments={video.comments}
      />
    </div>
  );
}

export default App;
