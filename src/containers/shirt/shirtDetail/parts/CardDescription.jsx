import Arcsaber from "./cardDescription/Arcsaber";
import Astrox from "./cardDescription/Astrox";
import Nanoflare from "./cardDescription/Nanoflare";
import Duora from "./cardDescription/Duora";
import { useParams } from 'react-router-dom';
import { useShirt } from "../hook/useShirt";

function CardDescription() {
  const { id } = useParams();
  const { data: shirt } = useShirt(id);

  const descriptionStyle = {
    letterSpacing: '2px'
  };

  const description = shirt?.product_description.split(',').reduce((acc, item) => {
    const [key, value] = item.split(':');
    acc[key.trim()] = value ? value.trim() : '';
    return acc;
  }, {});

  return (
    <div className="flex flex-col px-32 gap-10 mt-20 text-justify">
      <div>
        <p className="text-2xl font-bold" style={descriptionStyle}>DESCRIPTION</p>
      </div>
      <div>
        {description?.Type === 'ARCSABER' && <Arcsaber />}
        {description?.Type === 'ASTROX' && <Astrox />}
        {description?.Type === 'NANOFLARE' && <Nanoflare />}
        {description?.Type === 'DUORA' && <Duora />}
      </div>
    </div>
  );
}

export default CardDescription;
