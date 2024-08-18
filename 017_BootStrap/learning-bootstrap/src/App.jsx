import "./App.css";
import pandaImage from "./assets/panda.png";

function App() {
  return (
    // {can you please resolve the image error}
    // {Sure, I can help you with that.}
    // {I have imported the image in the App component.}
    // {I have also added the image in the card.}
    // {Now, you can see the image in the card.}

    <div>
      <div class="card" style="width: 18rem;">
        <img src={pandaImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
