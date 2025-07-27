import { useState, useEffect, useRef } from "react";
import HeaderTitle from "./HeaderTitle";
import MembersIcon from "./Members";
import Name from "./Name";
import About from "./About";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleHeaderClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="flex flex-row justify-between p-2">
        <div className="flex flex-row text-primary gap-2">
          <div onClick={handleHeaderClick} className="cursor-pointer">
            <HeaderTitle />
          </div>
          <Name />
        </div>
        <MembersIcon numberOfMembers={5} />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div ref={modalRef} className="p-4 rounded-lg relative">
            <About />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
