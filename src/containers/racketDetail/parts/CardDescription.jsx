import CardDescriptionArcsaber from "./CardDescriptionArcsaber";
import CardDescriptionAstrox from "./CardDescriptionAstrox";
import CardDescriptionNanoflare from "./CardDescriptionNanoflare";
import CardDescriptionDuora from "./CardDescriptionDuora";
import { useParams } from 'react-router-dom';
import { useRacket } from "../hook/useRacket";

function CardDescription() {

  const { id } = useParams();
  const { data: racket } = useRacket(id);

  const descriptionStyle = {
    letterSpacing: '2px'
  };

  const description = racket?.product_description.split(',').reduce((acc, item) => {
    const [key, value] = item.split(':');
    acc[key.trim()] = value ? value.trim() : '';
    return acc;
  }, {});

  return (
    <div className="flex flex-col px-32 gap-10 mt-40 text-justify">
      <div>
        <p className="text-2xl font-bold" style={descriptionStyle}>DESCRIPTION</p>
      </div>
      <div>
        {description?.Type === 'ARCSABER' && <CardDescriptionArcsaber />}
        {description?.Type === 'ASTROX' && <CardDescriptionAstrox />}
        {description?.Type === 'NANOFLARE' && <CardDescriptionNanoflare />}
        {description?.Type === 'DUORA' && <CardDescriptionDuora />}
      </div>
    </div>
  );
}

export default CardDescription;
