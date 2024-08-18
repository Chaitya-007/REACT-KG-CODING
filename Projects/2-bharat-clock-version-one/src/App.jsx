import "./App.css";
import CurrentTime from "./components/CurrentTime.jsx";
import ClockSlogan from "./components/ClockSlogan.jsx";
import ClockHeading from "./components/ClockHeading.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
