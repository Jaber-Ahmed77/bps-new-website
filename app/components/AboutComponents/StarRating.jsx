import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars).fill(<IoIosStar className="text-[#F18238] text-xl" />)}
      {hasHalfStar && <IoIosStarHalf className="text-[#F18238] text-xl" />}
      {Array(emptyStars).fill(
        <IoIosStarOutline className="text-gray-300 text-xl" />
      )}
    </div>
  );
};

export default StarRating;
