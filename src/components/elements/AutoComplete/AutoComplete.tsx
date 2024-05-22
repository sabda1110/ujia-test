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
    formik.setFieldValue(name, newValue);
    console.log(e);
  };

  const handleBlur = () => {
    formik.setFieldTouched(name, true);
  };

  return (
    <div>
      <Autocomplete
        onChange={handleChange}
        className={`bg-white w-[90%] md:w-[59.5%]  `}
        disablePortal
        onBlur={handleBlur}
        id="combo-box-demo"
        options={data}
        value={formik.values[name]}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Provinsi" />}
      />
      {formik.touched[name] ? (
        <span className="text-rose-500">{formik.errors[name]}</span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AutoComplete;
