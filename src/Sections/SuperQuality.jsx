import Button from "../components/Button";
import{shoe8} from "../assets/images"
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between item-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-violet-600"> Super </span> <br />
          <span className="text-violet-600">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat text-gray-600 text-lg leading-7">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innvovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-gray-600 text-lg leading-7">Our Dedication To Ans excellence Ensures Your Satisfaction </p>
        <div className="mt-11">
        <Button label="View Deatils" iconURL={arrowRight} />

        </div>
      </div>
      <div className="flex-1 flex justify-center item-center ">
        <img src={shoe8} alt="shoe8" width={470} height={422}
        className="boject-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
