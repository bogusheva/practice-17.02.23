import { useParams } from "react-router-dom";
import Block from "./Block";

export default function DynamicBlock({ data }) {
  const { catName } = useParams();
  const cat = data.find((item) => item.name === catName);
  return (
    <section className="kittens main">
      <Block data={cat} />;
    </section>
  );
}
