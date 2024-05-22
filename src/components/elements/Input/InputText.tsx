import { IoMdPerson } from 'react-icons/io';
import { useState, useRef, useEffect } from 'react';

const InputText: React.FC<MyApp.InputTextProps> = ({
  name,
  label,
  formik
}: {
  name: string;
  label: string;
  formik: any;
}) => {
  const [aktif, setAktif] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formik.values[name] !== '') {
      setAktif(true);
    }
  }, [formik.values[name]]);

  useEffect(() => {
    const handler = (e: any) => {
      if (!modalRef.current?.contains(e.target) && formik.values[name] === '') {
        setAktif(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [formik.values[name]]);

  const handleClick = () => {
    if (!aktif) {
      setAktif(true);
      inputRef.current?.focus();
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        ref={modalRef}
        className={` ${
          aktif
            ? 'text-blue-500 border-blue-400 '
            : 'text-gray-400 border-gray-200'
        } md:w-[30%] w-[90%] flex justify-between  p-4 px-6 transition-all ease-in-out duration-150 rounded-md h-[50px] relative border-2  bg-white`}
      >
        <p
          className={` ${
            aktif ? '  top-[-0.6rem] text-[0.8rem] bg-white' : 'text-[1rem]'
          }   absolute font-medium top-2 transition-all ease-in-out duration-500  `}
        >
          {label}
        </p>
        <input
          ref={inputRef}
          type="text"
          value={formik.values[name]}
          name={name}
          id={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className=" w-full text-black  outline-none"
        />
        <IoMdPerson size={25} className=" mt-[-0.3rem]" />
      </div>
      {formik.touched[name] ? ( // Pesan kesalahan akan muncul jika input telah disentuh (touched)
        <span className="text-rose-500">{formik.errors[name]}</span>
      ) : (
        <></>
      )}
    </>
  );
};

export default InputText;
