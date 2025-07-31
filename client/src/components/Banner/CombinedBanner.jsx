import { useNavigate } from "react-router-dom";
import Image1 from "../../assets/blogs/blog4.jpeg";
import Image2 from "../../assets/image2.jpeg";

const CombinedBanner = () => {
  const navigate = useNavigate();

  const bannerData = [
    {
      img: Image1,
      heading: "Help the Needy People",
      points: [
        "True humanity shines brightest when we extend our hands to those in need.",
        "Giving isn’t about how much you have—it’s about how deeply you care.",
        "By helping the needy, we become the reason someone believes in goodness again.",
      ],
      reverse: false,
    },
    {
      img: Image2,
      heading: "Help the Needy People",
      points: [
        "Helping the needy is not just an act of kindness, but a powerful step toward building a more compassionate and united world.",
        "Every small gesture of support can ignite hope in someone’s darkest hour.",
        "When we uplift others, we rise together—one act of generosity at a time.",
      ],
      reverse: true,
    },
  ];

  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      {bannerData.map((section, index) => (
        <div
          key={index}
          className={`container md:h-[500px] flex items-center justify-center py-10 ${
            index > 0 ? "border-t border-slate-300 dark:border-slate-700" : ""
          }`}
        >
          <div
            className={`grid grid-cols-1 items-center gap-4 sm:grid-cols-2 ${
              section.reverse ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div>
              <img
                src={section.img}
                alt=""
                className="mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
              />
            </div>

            {/* Text */}
            <div className="lg:max-w-[400px] space-y-6">
              <h1 className="text-2xl font-semibold md:text-4xl mb-4">
                {section.heading}
              </h1>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                {section.points.map((point, idx) => (
                  <li key={idx} className="font-medium">
                    {point}
                  </li>
                ))}
              </ul>
              <button className="btn-primary" onClick={() => navigate("/video")}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CombinedBanner;
