import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";

export const getInputTextsConfig = (newProduct) => [
  {
    id: "0",
    name: "title",
    value: newProduct.title,
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
    version: "minimalist",
    className: "title",
  },
  {
    id: "1",
    name: "imageSource",
    value: newProduct.imageSource,
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
    version: "minimalist",
    className: "image-source",
  },
  {
    id: "2",
    name: "price",
    value: newProduct.price,
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
    version: "minimalist",
    className: "price",
  },
  {
    id: "3",
    name: "available",
    value: newProduct.available,
    placeholder: "disponible",
    Icon: <FiPackage />,
    version: "minimalist",
    className: "available",
  },
  {
    id: "4",
    name: "publicised",
    value: newProduct.publicised,
    placeholder: "publicité",
    Icon: <GoMegaphone />,
    version: "minimalist",
    className: "publicised",
  },
];
