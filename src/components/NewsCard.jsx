import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, total_view, rating } = news;
  const formattedDate = new Date(author.published_date).toLocaleDateString();
  return (
    <div>
      <div className="shadow-sm border-gray-700 rounded-b-md">
        <div className="CARD-NAVBAR flex justify-between items-center bg-base-300 p-3 rounded-t-md mt-5">
          <div className="NAV-LEFT flex items-center gap-2">
            <figure className="my-4">
              <img className="h-10 w-10 rounded-full" src={author.img} alt="" />
            </figure>
            <div>
              <h2 className="font-semibold">{author.name} </h2>
              <p className="text-sm text-base-200">{formattedDate}</p>
            </div>
          </div>
          <div className="NAV-RIGHT flex items-center gap-2">
            <CiBookmark size={24} />
            <CiShare2 size={24} />
          </div>
        </div>

        <div className="p-4">
          <h1 className="text-[20px] text-base-content font-semibold">
            {title}
          </h1>
          <figure className="mt-5 mb-10">
            <img className="rounded-sm w-full" src={image_url} alt="" />
          </figure>
          <p className="text-accent text-[16px]">
            {details.length > 200 ? (
              <>
                {details.slice(0, 200)}...
                <br />
                <span className="cursor-pointer hover:underline font-semibold text-[#FF8C47]">
                  Read more...
                </span>
              </>
            ) : (
              details
            )}
          </p>

          <hr className="my-5 text-gray-400 shadow-accent" />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-orange-400">
                {Array.from({ length: rating.number }).map((_, i) => (
                  <FaStar key={i}></FaStar>
                ))}
              </div>
              <p className="rating font-medium">{rating.number}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEye size={24} />
              <p>{total_view}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
