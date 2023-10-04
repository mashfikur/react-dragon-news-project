import { BsBookmark, BsEyeFill, BsShare } from "react-icons/bs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const { _id, title, author, image_url, details,rating,total_view } = singleNews;

  return (
    <div className="mt-7">
      <div className="flex justify-between items-center bg-base-200 px-5 py-3">
        <div className="flex items-center gap-4">
          <div>
            <img
              className="w-10 rounded-full"
              src={author?.img}
              alt="author-Image"
            />
          </div>
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-[#706F6F]">
              {author.published_date && author?.published_date.split(" ")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-[#706F6F] text-xl">
          <BsBookmark className="cursor-pointer"></BsBookmark>
          <BsShare className="cursor-pointer"></BsShare>
        </div>
      </div>

      <div className="px-5 border-2 border-t-0 rounded-b-lg">
        <h3 className="font-bold text-xl py-3 ">{title}</h3>
        <img className="mb-8" src={image_url} alt="" />
        <p className="mb-3">
          {details.split("").slice(0, 200)}...{" "}
          <Link to={`/news/${_id}`} className="font-semibold text-[#FF8C47]">Read More</Link>{" "}
        </p>

        <hr />
        <div className="my-5 flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div>
              <span>{rating.number}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#706F6F text-xl] ">
            <BsEyeFill></BsEyeFill>
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.object,
};

export default NewsCard;
