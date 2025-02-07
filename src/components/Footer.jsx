
import { MdEmail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12 " name="info">
        <div className="max-w-screen-2xl container mx-auto px-4 md:x-20">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="space-y-2">
              <p className="text-wrap text-[1.1rem] font-semibold">
                Design & Developed By
              </p>
              <p className="text-[1.2rem] text-red-600 font-semibold">
                &copy; Azeez Shaik
              </p>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col items-center">
              <p className="font-Medium text-[1rem]">
                Reach out to me through!
              </p>
              <div className="flex flex-col gap-12 justify-center md:flex-row mt-4">
                <p className="flex gap-1">
                  <MdEmail className="mt-1 h-5 w-5" />
                  <span className=" text-red-600 font-semibold cursor-pointer">
                    skazeez0217@gmail.com
                  </span>
                </p>
                <p className="flex gap-1">
                  <RiPhoneFill className="mt-1 h-5 w-5" />
                  <span className=" text-red-600 font-semibold cursor-pointer">
                    8247017662
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
