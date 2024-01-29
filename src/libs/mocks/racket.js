// mocks/rackets.js

// Data simulasi untuk raket
const racketsData = [
  {
    id: 1,
    name: 'ARCSABER 7 PRO',
    color: 'GRAYISH PEARL',
    price: 'IDR 2.500.000',
    imageSrc: '/src/assets/images/card-racket/yonex/jpg/arcsaber-7-pro.jpg',
  },
  {
    id: 2,
    name: 'ARCSABER 11 PRO',
    color: 'GRAYISH PEARL',
    price: 'IDR 2.500.000',
    imageSrc: '/src/assets/images/card-racket/yonex/jpg/arcsaber-11-pro.jpg',
  },
  {
    id: 3,
    name: 'ASTROX 88D PRO',
    color: 'GRAYISH PEARL',
    price: 'IDR 2.500.000',
    imageSrc: '/src/assets/images/card-racket/yonex/jpg/astrox-88d-pro.jpg',
  },
  {
    id: 4,
    name: 'ASTROX 88S PRO',
    color: 'GRAYISH PEARL',
    price: 'IDR 2.500.000',
    imageSrc: '/src/assets/images/card-racket/yonex/jpg/astrox-88s-pro.jpg',
  },
  {
    id: 5,
    name: 'ASTROX 99 PRO',
    color: 'GRAYISH PEARL',
    price: 'IDR 2.500.000',
    imageSrc: '/src/assets/images/card-racket/yonex/jpg/astrox-99-pro.jpg',
  },
  {
    id: 6,
    name: 'ASTROX 100 PRO',
    color: 'GRAYISH PEARL',
    price: 'IDR 2.500.000',
    imageSrc: '/src/assets/images/card-racket/yonex/jpg/astrox-100-pro.jpg',
  },
  {
    id: 7,
    name: 'NANOFLARE 800 PRO',
    color: 'GRAYISH PEARL',
    price: 'IDR 2.500.000',
    imageSrc: '/src/assets/images/card-racket/yonex/jpg/nanoflare-800-pro.jpg',
  },
  {
    id: 8,
    name: 'NANOFLARE 1000 Z',
    color: 'GRAYISH PEARL',
    price: 'IDR 2.500.000',
    imageSrc: '/src/assets/images/card-racket/yonex/jpg/nanoflare-1000-z.jpg',
  },
];

// Fungsi untuk mendapatkan detail raket berdasarkan ID
export const getRacketById = (id) => {
  return racketsData.find((racket) => racket.id === parseInt(id));
};

// Ekspor racketsData agar dapat diakses di tempat lain
export default racketsData;
