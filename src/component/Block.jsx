import "./dynamicBlock.css";

export default function Block({ data }) {
  return (
    <div className="block">
      <h2 className="block-heading">{data.name}</h2>
      <h4 className="block-subheading">{data.breed}</h4>
      <div className="block-img">
        <img src={data.url} alt="cat" />
      </div>
      <p className="block-description">{data.description}</p>
      <p className="block-location">{data.location}</p>
    </div>
  );
}
