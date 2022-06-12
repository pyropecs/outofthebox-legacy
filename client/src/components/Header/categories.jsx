import { FaCaretDown } from "react-icons/fa";

export default function Categories() {
  return (
    <>
      <button className=" flex p-6 pr-0 flex-center basis-auto   hover:text-lg  items-center">
        <p className="pr-2 font-semibold uppercase text-base  ">Categories</p>
        <div className="text-white ">
          <FaCaretDown />
        </div>
      </button>
    </>
  );
}
