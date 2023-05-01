function InputFeed({ Icon, title }) {
  return (
    // Input Feed
    <div className="flex items-center pt-3  text-black opacity-60 cursor-pointer hover:bg-slate-300 hover:rounded-xl">
      <Icon className="text-xl" />
      <h4 className="text-base font-semibold pl-1">{title}</h4>
    </div>
  );
}

export default InputFeed;
