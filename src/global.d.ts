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
      id: string;
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
  }
}

// Export statement to ensure this file is treated as a module
export {};
