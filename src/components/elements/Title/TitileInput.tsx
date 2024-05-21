const TitileInput = ({ label = '' }: { label: string }) => {
  return (
    <div className=" text-[#242424] mt-3">
      <h3 className=" md:text-[1.1rem] text-[0.9rem] font-semibold">
        {label} <span className=" text-red-500">*</span>
      </h3>
      <p className=" text-gray-400 mb-3 text-[0.8rem] md:text-[1rem]">
        Masukan {label} anda sesuai identitas anda, agar mempermudah kami dalam
        membaca
      </p>
    </div>
  );
};

export default TitileInput;
