export const isValidProvinsi = (value: any): value is MyApp.Provinsi => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value
  );
};

export const isValidKabupaten = (value: any): value is MyApp.Kabupaten => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'province_id' in value &&
    'name' in value
  );
};

export const isValidKecamatan = (value: any): value is MyApp.Kecamatan => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'regency_id' in value &&
    'name' in value
  );
};

export const isValidKelurahan = (value: any): value is MyApp.Kelurahan => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'district_id' in value &&
    'name' in value
  );
};
