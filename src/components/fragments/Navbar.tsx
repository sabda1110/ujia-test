import { IoMenu } from 'react-icons/io5';
import useMediaQuery from '../../hook/useMediaQuery';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarMenu } from '../../contex/NavbarContext';
// import { useState } from 'react';
const Navbar: React.FC = () => {
  const { open, setOpen } = useNavbarMenu();

  const handleClick = () => {
    setOpen(!open);
    document.body.classList.toggle('overflow-hidden');
  };

  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  if (isDesktop && open) {
    document.body.classList.remove('overflow-hidden');
  } else if (!isDesktop && open) {
    document.body.classList.add('overflow-hidden');
  }

  return (
    <div className=" fixed top-0 w-full z-50 md:px-14 px-3   flex p-4 h-[10svh] justify-between bg-[#F5F6F7] shadow-md items-center">
      <img src="/Images/logo.png" alt="Icon Logo" width={150} height={150} />
      <IoMenu size={30} onClick={handleClick} className=" md:hidden" />
      <div className="item  items-center gap-x-4 md:flex hidden">
        <Link
          to={'/user'}
          className="  cursor-pointer font-bold border-b-0 hover:border-b-2 transition-all ease-in-out duration-100  border-yellow-300"
        >
          Home
        </Link>
        <Link
          to={'/user/add'}
          className=" cursor-pointer font-bold border-b-0 hover:border-b-2 transition-all ease-in-out duration-100   border-yellow-300"
        >
          Tambah
        </Link>
      </div>
      <div
        className={` ${
          open ? 'translate-x-0' : '-translate-x-full'
        } absolute left-0 top-[4.3rem] flex items-center p-4 cursor-pointer text-white justify-center gap-y-6 flex-col  transition-all md:hidden ease-in-out duration-200 bg-black/80 w-screen h-screen`}
      >
        <p className=" text-3xl border-b-0 hover:border-b-2 w-full text-center border-yellow-200 transition-all ease-in duration-150">
          Home
        </p>
        <p className=" text-3xl border-b-0 hover:border-b-2 w-full text-center border-yellow-200 transition-all ease-in duration-150">
          Anggota
        </p>
      </div>
    </div>
  );
};

export default Navbar;
