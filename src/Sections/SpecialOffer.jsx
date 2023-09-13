import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div>
        <img
          src={offer}
          alt={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-violet-600"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat text-gray-600 text-lg leading-7">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-gray-600 text-lg leading-7">
         Navigate a realm of possibilities designedd to fulfill your unique desires, suppassing the loftiest expectation. Your journey with us is nothing short of expceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="View Deatils" />
          <Button label='Learn More' backgroundColor='bg-white' borderColor='border-gray-400' textColor='text-gray-500'/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
