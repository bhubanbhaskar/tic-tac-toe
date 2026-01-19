function Log({ turns }) {
  if (turns.length === 0) {
    return <p>No moves yet.</p>;
  }
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}>
          Player <strong>{turn.player}</strong> selected row{" "}
          <strong>{turn.square.row}</strong>, column{" "}
          <strong>{turn.square.col}</strong>
        </li>
      ))}
    </ol>
  );
}
export default Log;
