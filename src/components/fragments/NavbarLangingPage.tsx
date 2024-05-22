const NavbarLangingPage: React.FC = () => {
  return (
    <div className=" w-full  px-8 flex justify-between relative z-50 ">
      <img
        src="/Images/logo.png"
        width={200}
        height={200}
        className=" object-cover"
      />
      <div className="item  md:flex hidden items-center gap-x-24">
        <section className=" flex items-center gap-x-5">
          <p className=" cursor-pointer border-b border-gray-100  font-bold  text-white">
            Home
          </p>
          <p className=" cursor-pointer border-b border-gray-100  font-bold  text-white">
            Contact
          </p>
          <p className=" cursor-pointer border-b border-gray-100  font-bold  text-white">
            Person
          </p>
        </section>
        <section className=" flex items-center gap-x-5">
          <p className=" border-b cursor-pointer border-gray-100  font-bold  text-white">
            Sign In
          </p>
          <p className=" cursor-pointer p-4 flex items-center justify-center   text-center font-bold bg-white rounded-3xl">
            Sign Up
          </p>
        </section>
      </div>
    </div>
  );
};

export default NavbarLangingPage;
