import { MdFavoriteBorder } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { TbArrowsRightLeft } from "react-icons/tb";
import { RiShoppingBag4Line } from "react-icons/ri";

const ProductCartBar = () => {
  return (
    <div className="text-gray-500 text-lg flex items-center justify-center gap-2.5">
      <div className="border shadow-md bg-white p-2 rounded-xl hover:bg-darkBlue hover:text-gray-300 hoverEffect">
        <MdFavoriteBorder />
      </div>
      <div className="border shadow-md bg-white p-2 rounded-xl hover:bg-darkBlue hover:text-gray-300 hoverEffect">
        <FaRegEye />
      </div>
      <div className="border shadow-md bg-white p-2 rounded-xl hover:bg-darkBlue hover:text-gray-300 hoverEffect">
        <TbArrowsRightLeft />
      </div>
      <div className="border shadow-md bg-white p-2 rounded-xl hover:bg-darkBlue hover:text-gray-300 hoverEffect">
        <RiShoppingBag4Line />
      </div>
    </div>
  );
};

export default ProductCartBar;