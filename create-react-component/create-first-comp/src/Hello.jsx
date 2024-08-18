function Hello() {
  // {} by using curly braces we can write javascript code inside jsx

  let myName = "Chaitya";
  let message = () => {
    return "This is a message from a function";
  };

  return (
    <h3>
      Meassage : {message()}
      <br />
      Hello World. This is {myName} speaking.
    </h3>
  );
}

export default Hello;
