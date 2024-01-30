import CardDescriptionArcsaber from "./CardDescriptionArcsaber";
import CardDescriptionAstrox from "./CardDescriptionAstrox";
import CardDescriptionNanoflare from "./CardDescriptionNanoflare";
import CardDescriptionDuora from "./CardDescriptionDuora";
import { useParams } from 'react-router-dom';
import racketsData from "../../../libs/mocks/rackets";

function CardDescription() {

  const { id } = useParams();
  const racket = racketsData.find((racket) => racket.id === parseInt(id));

  const descriptionStyle = {
    letterSpacing: '2px'
  };

  return (
    <div className="flex flex-col px-32 gap-10 mt-40 text-justify">
      <div>
        <p className="text-2xl font-bold" style={descriptionStyle}>DESCRIPTION</p>
      </div>
      <div>
        {racket.Type === 'ARCSABER' && <CardDescriptionArcsaber />}
        {racket.Type === 'ASTROX' && <CardDescriptionAstrox />}
        {racket.Type === 'NANOFLARE' && <CardDescriptionNanoflare />}
        {racket.Type === 'DUORA' && <CardDescriptionDuora />}
      </div>
    </div>
  );
}

export default CardDescription;
