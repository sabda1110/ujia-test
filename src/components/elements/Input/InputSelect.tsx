import { useState, useRef, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const InputSelect: React.FC<MyApp.InputSelectProps> = ({
  label,
  name,
  formik,
  data = []
}) => {
  const [aktif, setAktif] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!aktif) {
      setAktif(true);
      setOpenModal(true);
    }
  };

  useEffect(() => {
    const handler = (e: any) => {
      if (
        !modalRef.current?.contains(e.target) &&
        (formik.values[name].name === '' ||
          formik.values[name].name === undefined)
      ) {
        setAktif(false);
        setOpenModal(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [formik]);

  const handleChange = (item: any) => {
    formik.setFieldValue(name, item);

    setOpenModal(false);
  };
  const handleChangeCancle = () => {
    formik.setFieldValue(name, {});
    setAktif(false);
  };

  return (
    <div
      onClick={handleClick}
      ref={modalRef}
      className={` ${
        aktif
          ? 'text-blue-500 border-blue-400 '
          : 'text-gray-400 border-gray-200'
      } md:w-[59.5%]  w-[90%]   flex justify-between p-3 transition-all ease-in-out duration-150 rounded-md h-[55px] relative border-2  bg-white`}
    >
      <p
        className={` ${
          aktif ? '  top-[-0.55rem] text-[0.8rem] bg-white' : 'text-[1rem]'
        }   absolute font-medium top-3 transition-all ease-in-out duration-500  `}
      >
        {label}
      </p>
      <p className=" my-auto text-[0.8rem] md:text-[1rem] ">
        {formik.values[name]?.name}
      </p>
      <section className=" flex gap-x-3">
        {formik.values[name]?.name !== undefined && (
          <RxCross2
            size={25}
            onClick={handleChangeCancle}
            className=" my-auto hover:bg-gray-100 cursor-pointer rounded-full"
          />
        )}
        <FaCaretDown size={20} className=" my-auto " />
      </section>
      {openModal && (
        <div className=" w-full z-30 h-[200px] items-center left-0 top-[3.2rem] rounded-t rounded-b-lg border-2 overflow-y-scroll flex flex-col gap-y-2 border-blue-400 bg-white  absolute">
          {data.map((item: any, index) => (
            <p
              key={index}
              onClick={() => handleChange(item)}
              className=" cursor-pointer p-2 w-[90%] text-[0.8rem] md:text-[1rem] rounded-md text-left hover:bg-gray-200 hover:text-[#242424] "
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputSelect;
