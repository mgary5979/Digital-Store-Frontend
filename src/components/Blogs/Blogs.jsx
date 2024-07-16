import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose the perfect smartwatch",
    subtitle:
      "Chosing the perfect smartwatch is a crucial part of the stage, you not only need to find the best fit material but also the perfect watch that complements that perfect material.",
    published: "Jan 20, 2024 by Dilshad.",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "How to choose the perfect gadget.",
    subtitle:
      "Choosing the perfect gadget is easier said then done, you have to think of the style you like, would you prefer a gadget that you wear or maybe a gadget that you can carry around.",
    published: "Jan 24, 2024 by Satya",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "How to choose the perfect VR headset.",
    subtitle:
      "So in talking about VR headsets the one you go for will depend on who your getting it for, would it be an oculus or would it be a playstation VR, you also have to take in to account the price and coverage.",
    published: "Jan 19, 2024 by Sabir",
    image: Img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header Section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        {/* Blog Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:bg-gray-900"
            >
              {/* Image Section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt="blog images"
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* Content Section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
