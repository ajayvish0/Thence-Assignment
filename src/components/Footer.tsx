import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between">
      <div className="flex   items-center">
        <svg className="w-[90px] pt-1">
          <path
            d="M63.7877 69.4277C62.913 67.9735 61.3195 67 59.5 67C56.74 67 54.5 69.24 54.5 72C54.5 74.76 56.74 77 59.5 77C61.3195 77 62.913 76.0265 63.7877 74.5723L62.0729 73.5442C61.5483 74.4166 60.5927 75 59.5 75C57.8425 75 56.5 73.6575 56.5 72C56.5 70.3425 57.8425 69 59.5 69C60.593 69 61.5491 69.5839 62.0735 70.4568L63.7877 69.4277ZM69.5 72C69.5 66.48 65.02 62 59.5 62C53.98 62 49.5 66.48 49.5 72C49.5 77.52 53.98 82 59.5 82C65.02 82 69.5 77.52 69.5 72ZM51.5 72C51.5 67.58 55.08 64 59.5 64C63.92 64 67.5 67.58 67.5 72C67.5 76.42 63.92 80 59.5 80C55.08 80 51.5 76.42 51.5 72Z"
            fill="#1C1C1C"
          />
        </svg>
        <h1>Talup 2023. All rights reserved</h1>
      </div>
      <div className="flex items-center gap-x-[3rem] pr-[2rem]">
        <Link to="/" className="underline ">
          Terms & Conditions
        </Link>
        <Link to="/" className="underline ">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
