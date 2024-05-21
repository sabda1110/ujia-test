import { IoPerson } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

interface ModalPegawaiProps {
  pegawai: MyApp.Pegawai;
}
const ModalPegawai: React.FC<ModalPegawaiProps> = ({
  pegawai
}: {
  pegawai: MyApp.Pegawai;
}) => {
  const showProvinsi = pegawai.provinsi?.id && pegawai.provinsi?.name;
  const showKabupaten = pegawai.kabupaten?.id && pegawai.kabupaten?.name;
  const showKecamatan = pegawai.kecamatan?.id && pegawai.kecamatan?.name;
  const showKelurahan = pegawai.kelurahan?.id && pegawai.kelurahan?.name;

  return (
    <section className="flex flex-col gap-y-2 p-2 md:w-[30%] w-full shadow-md bg-[#F5F6F7] border rounded-md">
      <div className="w-[100%] items-center grid grid-cols-2">
        <IoPerson className="text-blue-400" size={20} />
        <p className="font-bold md:ml-[-6.5rem] text-[#242424] md:text-[1rem] text-[0.8rem] ">
          {pegawai?.nama}
        </p>
      </div>
      {showProvinsi && (
        <div className="w-[100%] items-center grid grid-cols-3">
          <FaLocationDot className="text-blue-400" size={20} />
          <p className="font-normal text-[#242424] md:text-[0.8rem] text-[0.7rem] col-span-2 md:-ml-14 ml-[-4.5rem]">
            {pegawai.provinsi?.name}, {showKabupaten && pegawai.kabupaten?.name}
            , {showKecamatan && pegawai.kecamatan?.name},{' '}
            {showKelurahan && pegawai.kelurahan?.name}, {pegawai?.jalan}
          </p>
        </div>
      )}
      <div className="action flex justify-between">
        <section className=" flex cursor-pointer hover:bg-gray-600 items-center gap-x-3 border px-4 py-2 rounded-md bg-gray-400 text-white">
          <FaRegEdit className="" size={20} />
          <p>Ubah</p>
        </section>
        <section className=" flex cursor-pointer hover:bg-gray-600 items-center gap-x-3 border px-4 py-2 rounded-md bg-gray-400 text-white">
          <FaTrashAlt className="" size={20} />
          <p>Hapus</p>
        </section>
      </div>
    </section>
  );
};

export default ModalPegawai;
