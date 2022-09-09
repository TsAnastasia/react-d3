import { ChangeEvent, useState } from "react";
import GraphsBar from "./GraphsBar/GraphsBar";

const GraphsPage = () => {
  const [color, setColor] = useState("#add8e6");

  const handleChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <main>
      <h1>Graphs page</h1>
      <p style={{ color: "red" }}>in development...</p>
      <section>
        <h2>Zoom line graph</h2>

        <input type="color" value={color} onChange={handleChangeColor} />

        <GraphsBar color={color} />
      </section>
    </main>
  );
};

export default GraphsPage;
