import Img1 from "../../assets/blogs/blog1.jpeg";
import Img2 from "../../assets/blogs/blog2.jpeg";
import Img3 from "../../assets/blogs/blog3.jpeg";
import BlogCard from "./BlogCard";

const BlogData = [
  {
    img: Img1,
    title:
      "Lifting Lives: The Power of Helping the Needy in a Hurting World",
    date: "April 22, 2024",
    writer: "John",
  },
  {
    img: Img2,
    title:
      "Kindness in Action: Why Supporting the Less Fortunate Matters More Than Ever",
    date: "Jan 22, 2024",
    writer: "Anonymous",
  },
  {
    img: Img3,
    title:
      "Be the Difference: How Small Acts of Help Create Big Waves of Change",
    date: "April 22, 2022",
    writer: "Frank",
  },
];
const Blogs = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="container py-8">
        <h1 className="mb-8 border-l-8 pl-2 text-center text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BlogData.map((blog) => (
            <BlogCard
              key={blog.title}
              img={blog.img}
              title={blog.title}
              date={blog.date}
              writer={blog.writer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
