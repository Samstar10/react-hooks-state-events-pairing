import video from "../data/video.js";
import Video from "./Video.js";
import VideoDetails from "./VideoDetails.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video />
      <VideoDetails />
    </div>
  );
}

export default App;
