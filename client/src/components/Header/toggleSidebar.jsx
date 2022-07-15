import { FaTimes } from "react-icons/fa";

export default function sideBarToggle() {
  return (
    <>
      <button className=" flex p-6  basis-auto   transition-all duration-300  flex-center hover:text-lg -translate-x-72 items-center hover:text-green-400">
        <p className="pr-2 font-semibold uppercase text-base  ">Close</p>
        <div className="text-white hover:text-green-400  transition-all duration-300">
          <FaTimes />
        </div>
      </button>
    </>
  );
}
