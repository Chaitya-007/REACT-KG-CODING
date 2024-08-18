function Random() {
  let ran = Math.random() * 100;

  return (
    // {{define your style}} => double curly brackets
    <h1 style={{ "background-color": "#776691" }}>
      this is random : {Math.round(ran)}
    </h1>
  );
}

export default Random;
