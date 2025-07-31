// import Image2 from "../../assets/blogs/blog4.jpeg";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/image2.jpeg";

const Banner2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container md:h-[500px] flex items-center justify-center py-10">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          {/* text container */}
          <div className="lg:max-w-[400px] space-y-6">
            <h1 className="text-2xl font-semibold md:text-4xl mb-4">
              Help the Needy People
            </h1>
            <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
              <li className="font-medium">
                Helping the needy is not just an act of kindness, but a powerful step toward building a more compassionate and united world.
              </li>
              <li className="font-medium">
                Every small gesture of support can ignite hope in someone’s darkest hour.
              </li>
              <li className="font-medium">
                When we uplift others, we rise together—one act of generosity at a time.
              </li>
            </ul>
            <button className="btn-primary" onClick={() => navigate("/video")}>Get Started</button>
          </div>
          {/* img container */}
          <div>
            <img
              src={Image}
              alt=""
              className="mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
