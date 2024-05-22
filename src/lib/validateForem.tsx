export function addValidate(values: any) {
  const errors: any = {};

  const containsHTML = (str: string) => /<\/?[a-z][\s\S]*>/i.test(str);

  if (!values.nama) {
    errors.nama = 'This field is required';
  }

  if (values.nama && containsHTML(values.nama)) {
    errors.nama = 'This field invalid';
  } else if (/\d/.test(values.nama)) {
    errors.nama = 'This field cannot contain numbers';
  }

  if (!values.provinsi) {
    errors.provinsi = 'This field is required';
  }

  if (!values.kabupaten?.id && values.provinsi) {
    errors.kabupaten = 'This field is required';
  }
  if (!values.kecamatan?.id && values.kabupaten?.id) {
    errors.kecamatan = 'This field is required';
  }
  if (!values.kelurahan?.id && values.kecamatan?.id) {
    errors.kelurahan = 'This field is required';
  }

  if (!values.jalan) {
    errors.jalan = 'This field is required';
  } else if (values.jalan && containsHTML(values.jalan)) {
    errors.jalan = 'This field invalid';
  }

  return errors;
}
