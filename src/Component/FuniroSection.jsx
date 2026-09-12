
import img1 from "../assets/Rectangle 36.png";
import img2 from "../assets/Rectangle 38.png";
import img3 from "../assets/Rectangle 37.png";
import img4 from "../assets/Rectangle 39.png";
import img5 from "../assets/Rectangle 40.png";
import img6 from "../assets/Rectangle 43.png";
import img7 from "../assets/Rectangle 45.png";
import img8 from "../assets/Rectangle 41.png";
import img9 from "../assets/Rectangle 44.png";

const FuniroSection = () => {
  return (
    <section className="flex flex-col items-center py-12 sm:py-16 lg:py-[70px] overflow-hidden">

      {/* Heading */}
      <div className="flex flex-col items-center text-center px-4">
        <p className="font-semibold text-base sm:text-lg lg:text-[20px]">
          Share your setup with
        </p>

        <h5 className="font-bold text-2xl sm:text-3xl lg:text-[40px] mt-1 lg:mt-[-10px]">
          #FuniroFurniture
        </h5>
      </div>

      {/* Images */}
      <div className="w-full mt-10 lg:mt-0">

        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-5 justify-center">

          {/* Left Images */}
          <div className="flex gap-5 flex-col">

            <div className="flex gap-5 items-start">
              <img
                src={img1}
                alt=""
                className="h-[382px] w-auto object-cover"
              />

              <img
                src={img2}
                alt=""
                className="h-[312px] w-[500px] object-cover mt-[70px]"
              />
            </div>

            <div className="flex gap-5">
              <img
                src={img3}
                alt=""
                className="w-auto h-[242px] object-cover"
              />

              <img
                src={img4}
                alt=""
                className="w-[394px] h-[242px] object-cover"
              />
            </div>
          </div>

          {/* Center */}
          <div>
            <img
              src={img5}
              alt=""
              className="w-[295px] h-[392px] object-cover mt-[150px]"
            />
          </div>

          {/* Right Images */}
          <div className="flex flex-col gap-5">

            <div className="flex gap-5">
              <img
                src={img6}
                alt=""
                className="w-[290px] h-[348px] object-cover mt-[85px]"
              />

              <img
                src={img7}
                alt=""
                className="w-[280px] h-[433px] object-cover"
              />
            </div>

            <div className="flex gap-5">
              <img
                src={img8}
                alt=""
                className="w-[178px] h-[242px] object-cover"
              />

              <img
                src={img9}
                alt=""
                className="w-[258px] h-[196px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile + Tablet Layout */}
        <div className="lg:hidden px-4 sm:px-8 mt-8">

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">

            <img
              src={img1}
              alt=""
              className="w-full h-[180px] sm:h-[230px] object-cover"
            />

            <img
              src={img2}
              alt=""
              className="w-full h-[180px] sm:h-[230px] object-cover"
            />

            <img
              src={img3}
              alt=""
              className="w-full h-[180px] sm:h-[230px] object-cover"
            />

            <img
              src={img4}
              alt=""
              className="w-full h-[180px] sm:h-[230px] object-cover"
            />

            <img
              src={img5}
              alt=""
              className="w-full h-[180px] sm:h-[230px] object-cover"
            />

            <img
              src={img6}
              alt=""
              className="w-full h-[180px] sm:h-[230px] object-cover"
            />

            <img
              src={img7}
              alt=""
              className="w-full h-[180px] sm:h-[230px] object-cover"
            />

            <img
              src={img8}
              alt=""
              className="w-full h-[180px] sm:h-[230px] object-cover"
            />

            <img
              src={img9}
              alt=""
              className="w-full h-[180px] sm:h-[230px] object-cover"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default FuniroSection;

