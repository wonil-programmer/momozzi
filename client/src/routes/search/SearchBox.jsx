import { forwardRef } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox = (
  { searchContent, onSearchContentChange, handleSearchBoxInputComplete },
  ref
) => {
  return (
    <>
      <div className="relative w-60 h-12 mx-5 my-2 overflow-hidden">
        <input
          className="w-full h-full pl-4 pr-14 rounded-2xl outline-none "
          type={"text"}
          placeholder={"레시피명을 입력하세요"}
          value={searchContent}
          onChange={onSearchContentChange}
          onKeyDown={(e) =>
            e.key === "Enter" ? handleSearchBoxInputComplete() : null
          }
          ref={ref}
        ></input>
        <IoIosSearch className="absolute bottom-2 right-4 text-3xl text-black/60" />
      </div>
    </>
  );
};

export default forwardRef(SearchBox);
