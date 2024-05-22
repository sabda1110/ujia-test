import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  isValidProvinsi,
  isValidKelurahan,
  isValidKecamatan,
  isValidKabupaten
} from '../lib/validateField';
import AutoComplete from '../components/elements/AutoComplete/AutoComplete';
import InputSelect from '../components/elements/Input/InputSelect';
import InputText from '../components/elements/Input/InputText';
import TitileInput from '../components/elements/Title/TitileInput';
import { useEffect, useState } from 'react';
import { getLokasi, getProvinsi } from '../service/lokasi.service';
import InputTextArea from '../components/elements/Input/InputTextArea';
import InputSelectMui from '../components/elements/SelectMui/InputSelectMui';
import { addValidate } from '../lib/validateForem';
import Swal from 'sweetalert2';
import { editAnggota } from '../service/anggota.service';

const UpdatePage: React.FC = () => {
  const [provinsi, setProvinsi] = useState<MyApp.Provinsi[]>([]);
  const [kabupaten, setKabupaten] = useState<MyApp.Kabupaten[]>([]);
  const [kecamatan, setKecamatan] = useState<MyApp.Kecamatan[]>([]);
  const [kelurahan, setKelurahan] = useState<MyApp.Kelurahan[]>([]);
  const { id } = useParams();
  const anggota: MyApp.Pegawai = useSelector((state: any) => {
    return state.anggota.data.find(
      (anggota: MyApp.Pegawai) => anggota.id === id
    );
  });

  const handleSubmit = () => {
    Swal.fire({
      title: 'Apakah Kamu Yakin?',
      text: 'Kamu akan mengedit data ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire('Edit...');
          Swal.showLoading();
          const response: MyApp.ResponData | undefined = await editAnggota(
            formik.values,
            id as string
          );
          if (response !== undefined) {
            if (response.status) {
              Swal.close();
            } else {
              throw new Error(response.data as string);
            }
          } else {
            throw new Error('Failed to edit anggota');
          }
        } catch (err) {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          });
        } finally {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Anggota Update successfully',
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(() => {
            window.location.href = '/user';
          }, 1000);
        }
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      nama: typeof anggota?.nama === 'string' ? anggota.nama : '',
      provinsi: isValidProvinsi(anggota?.provinsi) ? anggota.provinsi : null,
      kabupaten: isValidKabupaten(anggota?.kabupaten)
        ? anggota.kabupaten
        : null,
      kecamatan: isValidKecamatan(anggota?.kecamatan)
        ? anggota.kecamatan
        : null,
      kelurahan: isValidKelurahan(anggota?.kelurahan)
        ? anggota.kelurahan
        : null,
      jalan: typeof anggota?.jalan === 'string' ? anggota.jalan : ''
    },
    validate: addValidate,

    onSubmit: handleSubmit
  });

  //Dapatin Provinsi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: MyApp.ResponData | undefined = await getProvinsi();
        if (response !== undefined) {
          if (response.status) {
            setProvinsi(response.data as MyApp.Provinsi[]);
          } else {
            throw new Error(response.data as string);
          }
        } else {
          throw new Error('Failed to get Provinsi');
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (formik.values.provinsi !== undefined) {
      // Memeriksa apakah nilai provinsi sudah diatur
      fetchData();
    }
  }, [formik.values.provinsi]);

  //Dapatin Kabupaten
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(import.meta.env.VITE_API_KABUPATEN);
        const response: MyApp.ResponData | undefined = await getLokasi(
          import.meta.env.VITE_API_KABUPATEN,
          formik.values?.provinsi?.id as string
        );
        if (response !== undefined) {
          if (response.status) {
            setKabupaten(response.data as MyApp.Kabupaten[]);
          } else {
            throw new Error(response.data as string);
          }
        } else {
          throw new Error('Failed to get Provinsi');
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (formik.values?.provinsi?.id !== undefined) {
      fetchData();
    } else {
      setKabupaten([]);
      formik.setFieldValue('kabupaten', {});
    }
  }, [formik.values.provinsi]);

  //Dapatin Kecamatan
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: MyApp.ResponData | undefined = await getLokasi(
          import.meta.env.VITE_API_KECAMATAN,
          formik.values?.kabupaten?.id as string
        );
        if (response !== undefined) {
          if (response.status) {
            setKecamatan(response.data as MyApp.Kecamatan[]);
          } else {
            throw new Error(response.data as string);
          }
        } else {
          throw new Error('Failed to get Provinsi');
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (formik.values?.kabupaten?.id !== undefined) {
      fetchData();
    } else {
      setKecamatan([]);
      formik.setFieldValue('kecamatan', {});
    }
  }, [formik.values.kabupaten]);

  //Dapatin Kelurahan

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: MyApp.ResponData | undefined = await getLokasi(
          import.meta.env.VITE_API_KELURAHAN,
          formik.values?.kecamatan?.id as string
        );
        if (response !== undefined) {
          if (response.status) {
            console.log(response.data);
            setKelurahan(response.data as MyApp.Kelurahan[]);
          } else {
            throw new Error(response.data as string);
          }
        } else {
          throw new Error('Failed to get Provinsi');
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (formik.values?.kecamatan?.id !== undefined) {
      fetchData();
    } else {
      setKelurahan([]);
      formik.setFieldValue('kelurahan', {});
    }
  }, [formik.values.kecamatan]);

  return (
    <div
      className={`md:mt-[4.4rem] mt-[11rem]  h-[90svh] flex flex-col items-center justify-center`}
    >
      <h1 className=" text-3xl font-bold text-[#242424]">Update User</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="container w-[80%] md:h-[88%]   bg-[#f4f6f8] shadow-lg border p-4 border-gray-200 mt-5 rounded-lg"
      >
        <TitileInput label="Nama" />
        <InputText name="nama" formik={formik} label={'Nama'} />
        <TitileInput label="Alamat" />
        <div className=" w-full grid md:grid-cols-2 gap-y-3">
          <AutoComplete data={provinsi} name="provinsi" formik={formik} />

          <InputSelectMui
            label="Kelurahan"
            data={kabupaten}
            name="kabupaten"
            formik={formik}
          />

          <InputSelect
            label={'Kecamatan'}
            name={'kecamatan'}
            formik={formik}
            data={kecamatan}
          />
          <InputSelect
            label="Kelurahan"
            name={'kelurahan'}
            formik={formik}
            data={kelurahan}
          />
        </div>
        <TitileInput label="Jalan" />
        <InputTextArea name="jalan" formik={formik} />
        <div className="  flex justify-end  mt-[-5rem] md:mt-[1rem] pr-5">
          <button
            className=" px-10 py-2 border bg-blue-500 text-white font-bold shadow-md hover:bg-blue-600  rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
