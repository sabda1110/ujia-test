import { useEffect, useState } from 'react';
import { getAnggota } from '../service/anggota.service';
import ModalPegawai from '../components/fragments/ModalPegawai';
import ModalLoading from '../components/fragments/ModalLoading';
import { FaPersonCirclePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAwal } from '../redex/slices/anggotaSlice';
import { useNavbarMenu } from '../contex/NavbarContext';
const HomePage: React.FC = () => {
  const [anggota, setAnggota] = useState<MyApp.Pegawai[]>([
    {
      id: '',
      nama: '',
      jalan: ''
    }
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: MyApp.ResponData | undefined = await getAnggota();
        if (response !== undefined) {
          if (response.status) {
            setAnggota(response.data as MyApp.Pegawai[]);
            dispatch(addAwal(response.data as MyApp.Pegawai[]));
          } else {
            throw new Error(response.data as string);
          }
        } else {
          throw new Error('Failed to get anggota');
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { open } = useNavbarMenu();

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
        <Link
          to={'/user/add'}
          className=" bg-gray-400 rounded-md cursor-pointer hover:bg-gray-600 text-white flex items-center md:p-4 p-2 gap-x-4"
        >
          <FaPersonCirclePlus className="" size={20} />
          <p>Tambah</p>
        </Link>
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
