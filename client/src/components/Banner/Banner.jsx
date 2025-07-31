import { useNavigate } from "react-router-dom";
import Image2 from "../../assets/blogs/blog4.jpeg";


const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container md:h-[500px] flex items-center justify-center py-10">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          {/* img container */}
          <div>
            <img
              src={Image2}
              alt=""
              className="mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
            />
          </div>
          {/* text container */}
          <div className="lg:max-w-[400px] space-y-6">
            <h1 className="text-2xl font-semibold md:text-4xl mb-4">
              Help the Needy People
            </h1>
            <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
              <li className="font-medium">
                True humanity shines brightest when we extend our hands to those in need.
              </li>
              <li className="font-medium">
                Giving isn’t about how much you have it’s about how deeply you care.
              </li>
              <li className="font-medium">
                By helping the needy, we become the reason someone believes in goodness again.
              </li>
            </ul>
            <button className="btn-primary" onClick={() => navigate("/video")}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
