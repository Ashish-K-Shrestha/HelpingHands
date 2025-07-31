import PropTypes from 'prop-types';

const BlogCard = ({ img, title, date, writer }) => {
  return (
    <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
      <div className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>
      <div className="flex justify-between pt-2 text-slate-600 text-sm">
        <p>{date}</p>
        <p className="line-clamp-1">by {writer}</p>
      </div>
      <div className="space-y-2 py-3">
        <h1 className="line-clamp-1 font-bold">{title}</h1>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  // Add other props here as needed
};

export default BlogCard;
