const ModalLoading = () => {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse h-[80px] items-center flex  space-x-4">
        <div className="flex-1 space-y-20 py-1">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-5 bg-slate-700 rounded col-span-2"></div>
              <div className="h-5 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-5 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLoading;
