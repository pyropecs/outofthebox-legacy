import { FaTimes } from "react-icons/fa";

export default function sideBarToggle() {
  return (
    <>
      <button className=" flex p-6  basis-auto   flex-center hover:text-lg  items-center">
        <p className="pr-2 font-semibold uppercase text-base  text-green-400">
          Close
        </p>
        <div className="text-white ">
          <FaTimes />
        </div>
      </button>
    </>
  );
}
