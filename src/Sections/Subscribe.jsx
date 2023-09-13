import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-W-md font-palanquin font-bold">Sign Up From
<span className="text-violet-700"> Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">

        <input type="text" placeholder="subscribe@nike.com" className="sm:flex-1 max-sm:w-full text-base leading-normal text-gray-500 pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-gray-500 max-sm:rounded-full" />

      <div className="flex max-sm:justify-items-end items-center max-sm:w-full">
 <Button label="Sign Up" fullWidth></Button>
      </div>
      </div>
    </section>
  )
}

export default Subscribe