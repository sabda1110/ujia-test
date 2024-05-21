// Menggunakan namespace untuk mengelompokkan tipe
declare global {
  namespace MyApp {
    type Provinsi = {
      id: string;
      name: string;
    };

    type Kabupaten = {
      id: string;
      province_id: string;
      name: string;
    };

    type Kecamatan = {
      id: string;
      regency_id: string;
      name: string;
    };

    type Kelurahan = {
      id: string;
      district_id: string;
      name: string;
    };

    type Pegawai = {
      id?: string;
      nama: string;
      provinsi?: Provinsi | null;
      kabupaten?: Kabupaten | null;
      kecamatan?: Kecamatan | null;
      kelurahan?: Kelurahan | null;
      jalan?: string;
    };

    type Action = {
      type: string;
      payload: Pegawai;
    };

    type InitialState = {
      data: Pegawai[];
    };

    type NavbarMenuContextType = {
      open: boolean;
      setOpen: (open: boolean) => void;
    };

    type ResponData = {
      status: boolean;
      statusCode: number;
      data:
        | Pegawai[]
        | Kecamatan[]
        | Provinsi[]
        | Kelurahan[]
        | Kabupaten[]
        | string;
    };

    type InputSelectProps = {
      label: string;
      name: string;
      formik: any;
      data: object[];
    };

    type InputTextProps = {
      name: string;
      label: string;
      formik: any;
    };
  }
}

// Export statement to ensure this file is treated as a module
export {};
