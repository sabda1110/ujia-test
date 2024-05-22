const InputTextArea = ({ name, formik }: { name: string; formik: any }) => {
  return (
    <div className="w-full h-[200px] md:h-[15%]">
      <textarea
        className=" border-2 w-full h-[50px] rounded-lg md:h-full p-4 border-gray-200 outline-none "
        name={name}
        id={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        rows={5}
        cols={10}
        style={{ resize: 'none' }}
      />
      {formik.touched[name] ? ( // Pesan kesalahan akan muncul jika input telah disentuh (touched)
        <span className="text-rose-500">{formik.errors[name]}</span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InputTextArea;
