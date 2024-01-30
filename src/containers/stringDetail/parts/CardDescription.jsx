import CardDescriptionString from "./CardDescriptionString";

function CardDescription() {

  const descriptionStyle = {
    letterSpacing: '2px'
  };

  return (
    <div className="flex flex-col px-32 gap-10 mt-40 text-justify" >
      <div>
        <p className="text-2xl font-bold" style={descriptionStyle}>DESCRIPTION</p>
      </div>
      <div>
        <CardDescriptionString />
      </div>
    </div>
  );
}

export default CardDescription;
