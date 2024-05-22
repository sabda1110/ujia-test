import { FiSend } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BodyLandingPage = () => {
  return (
    <div className=" w-full items-center justify-center px-8  h-[100svh] relative grid md:grid-cols-2 gap-x-6 z-50">
      <section className=" flex gap-y-4 flex-col pt-10 md:h-[70%] h-full  ">
        <h1 className=" text-2xl text-[#191B21] font-bold">
          Ujian Techical Test
        </h1>
        <p className=" text-[#191B21] text-[0.8rem]">
          Saya baru saja mengikuti tes teknis yang diselenggarakan oleh Assis.id
          dan ingin berbagi pengalaman luar biasa saya. Platform ini memberikan
          tantangan yang sangat relevan dan mendetail, memungkinkan saya untuk
          mengukur kemampuan teknis saya secara efektif. Ujian ini tidak hanya
          menguji pengetahuan saya, tetapi juga memberikan wawasan yang berharga
          tentang area yang perlu saya tingkatkan. Bagi siapa pun yang ingin
          mengukur keterampilan teknis mereka dan mendapatkan umpan balik yang
          konstruktif, saya sangat merekomendasikan untuk mencoba tes dari
          Assis.id!
        </p>

        <Link
          to={'/user'}
          className=" flex gap-x-10 items-center bg-[#22A75D] text-white font-bold md:w-[30%] w-[50%] cursor-pointer rounded-md p-4"
        >
          <p>Kunjungin</p>
          <FiSend size={30} />
        </Link>

        <img
          src="/Images/pesawat.png"
          alt="pesawat icon"
          className="   md:hidden block absolute top-0 right-0 w-[100px] h-[100px] object-cover"
        />
      </section>
      <section className=" md:flex hidden relative ">
        <img
          src="/Images/avatar.png"
          alt="Avatar Icon"
          className=" w-[40%] object-contain"
        />
        <img
          src="/Images/avatar2.png"
          alt="Avatar Icon"
          className=" w-[60%] absolute right-[4rem] object-fill "
        />
      </section>
    </div>
  );
};

export default BodyLandingPage;
