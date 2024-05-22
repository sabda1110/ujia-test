import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type PropsInput = {
  data: any;
  label: string;
  name: string;
  formik: any;
};

const InputSelectMui: React.FC<PropsInput> = ({
  label,
  data = [],
  name,
  formik
}) => {
  const handleChange = (event: any) => {
    const newValue = data.find((item: any) => item.name === event.target.value);
    formik.setFieldValue(name, newValue);
  };

  const handleBlur = () => {
    formik.setFieldTouched(name, true);
  };

  return (
    <Box className={`bg-white w-[90%] md:w-[59.5%]  `}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik?.values[name]?.name}
          onBlur={handleBlur}
          label="Kelurahan"
          onChange={handleChange}
        >
          {data.map((item: any, index: any) => (
            <MenuItem key={index} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {formik.touched[name] ? (
        <span className="text-rose-500">{formik.errors[name]}</span>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default InputSelectMui;
