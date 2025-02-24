import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-scroll";
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("https://getform.io/f/axooxxgb", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(response);
      toast.success("Your message has been sent");
      reset();
    } catch (error) {
      toast.error("Something went wrong", error);
    }
  };
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto px-4 my-12 md:px-20"
        name="Contact Me"
      >
        <h1 className="text-3xl font-semibold mb-4">Contact me</h1>

        <p className="text-[1rem]">
          Getting in touch is a breeze! You can either fill out the form below
          or simply
          <Link
            to="info"
            smooth={true}
            duration={500}
            offset={-100}
            activeClass="active"
            className="mx-1 cursor-pointer font-semibold text-red-600 hover:text-red-800"
          >
            Click here
          </Link>
          here to contact me directly
        </p>
        <div className="flex flex-col items-center justify-center  mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            //action="https://getform.io/f/axooxxgb"
            //method="POST"
            className="bg-slate-300 w-96 px-8 py-6 rounded-md"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4 h-[75px]">
              <label className="block text-gray-700" htmlFor="">
                Full Name :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border px-3 py-2 leading-tight focus:outline rounded-md"
                placeholder="Enter your fullname"
                {...register("name", {
                  required: "This field is required",
                  minLength: { value: 3, message: "Minimum 3 letters" },
                  maxLength: { value: 20, message: "Maximum 20 letters" },
                })}
              />
              {errors.name && (
                <span className="text-sm text-red-400">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-4 h-[75px]">
              <label className="block text-gray-700" htmlFor="">
                Email Address :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border px-3 py-2 leading-tight focus:outline rounded-md"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter Correct Email Address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-sm text-red-400">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-4 h-[75px]">
              <label className="block text-gray-700" htmlFor="">
                Message :
              </label>
              <textarea
                id="Message"
                name="Message"
                className="shadow appearance-none border px-3 py-3 leading-tight focus:outline rounded-md"
                placeholder="Message"
                {...register("Message", {
                  required: "This field is required",
                  minLength: { value: 10, message: "Minimum 10 letters" },
                  maxLength: { value: 100, message: "Maximum 100 letters" },
                })}
              ></textarea>
              {errors.Message && (
                <span className="text-sm text-red-400">
                  {errors.Message.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-4 h-[75px]">
              <label className="block text-gray-700" htmlFor="">
                Mobile Number :
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="shadow appearance-none border px-3 py-2 leading-tight focus:outline rounded-md"
                placeholder="Enter your mobile number"
                {...register("phone", {
                  required: "This field is required",
                  minLength: {
                    value: 10,
                    message: "Mobile must be at least 10 digits",
                  },
                  maxLength: {
                    value: 10,
                    message: "Mobile must be not more than 10 digits",
                  },
                })}
              />
              {errors.phone && (
                <span className="text-sm text-red-400">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-white text-black rounded-md border-[1px] border-red-400 px-3 py-2 hover:border-1 hover:border-blue-900 duration-200 hover:shadow-md hover:shadow-blue-900"
            >
              Send
            </button>
          </form>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Contact;
