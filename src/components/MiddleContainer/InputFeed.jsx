function InputFeed({ Icon, title }) {
  return (
    // Input Feed
    <div className="flex items-center  pt-2 text-black opacity-60 cursor-pointer hover:bg-slate-300 hover:rounded-xl">
      <Icon />
      <h4 className="text-xs">{title}</h4>
    </div>
  );
}

export default InputFeed;
