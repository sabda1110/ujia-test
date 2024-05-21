import { useEffect, useState } from 'react';
import { getAnggota } from '../service/anggota.service';
import ModalPegawai from '../components/fragments/ModalPegawai';
import ModalLoading from '../components/fragments/ModalLoading';
import { FaPersonCirclePlus } from 'react-icons/fa6';
import { NavbarMenu } from '../contex/NavbarContext';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addAwal } from '../redex/slices/anggotaSlice';
const HomePage: React.FC = () => {
  const [anggota, setAnggota] = useState<MyApp.Pegawai[]>([
    {
      id: '',
      nama: '',
      provinsi: {},
      kabupaten: {},
      kecamatan: {},
      kelurahan: {},
      jalan: ''
    }
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getAnggota();
        if (response.status) {
          setAnggota(response.data);
          dispatch(addAwal(response.data));
        } else {
          throw new Error(response.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [open] = useContext(NavbarMenu);

  return (
    <div
      className={` mt-[4.3rem] relative  ${
        open && '-z-10'
      }     w-screen  flex flex-col items-center  h-[90svh]  p-4`}
    >
      <img
        className=" absolute -z-30 h-full lg:w-full sm:w-[100vw] md:w-full top-0"
        src="/Images/modalBackground.jpg"
        alt="Backgroud"
      />
      <h1 className=" mt-10 text-3xl font-bold text-[#242424]">Anggota</h1>
      <div className=" mt-5 flex button  w-[70%] justify-end">
        <section className=" bg-gray-400 rounded-md cursor-pointer hover:bg-gray-600 text-white flex items-center md:p-4 p-2 gap-x-4">
          <FaPersonCirclePlus className="" size={20} />
          <p>Tambah</p>
        </section>
      </div>
      <div className=" md:w-[70%]  w-[90%] relative   flex gap-5 mt-2 flex-wrap border-2 border-gray-300 p-4 rounded-md">
        {!loading &&
          anggota.map((item: MyApp.Pegawai, index) => (
            <ModalPegawai pegawai={item} key={index} />
          ))}
        {loading &&
          Array.from({ length: 2 }, (_, index) => {
            return <ModalLoading key={index} />;
          })}
      </div>
    </div>
  );
};

export default HomePage;
