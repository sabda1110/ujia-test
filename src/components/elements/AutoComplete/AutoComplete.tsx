import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutoComplete = ({
  data,
  name,
  formik
}: {
  data: MyApp.Provinsi[];
  name: string;
  formik: any;
}) => {
  const handleChange = (e: any, newValue: any) => {
    console.log(e.target.value);
    formik.setFieldValue(name, newValue);
  };

  return (
    <Autocomplete
      onChange={handleChange}
      className={`bg-white w-[90%] md:w-[59.5%]  `}
      disablePortal
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label="Provinsi" />}
    />
  );
};

export default AutoComplete;
