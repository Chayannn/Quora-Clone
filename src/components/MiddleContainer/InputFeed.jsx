function InputFeed({ Icon, title, count, color }) {
  return (
    // Input Feed
    <div className="flex text-black opacity-60 cursor-pointer">
      <div>
        <Icon className="text-2xl" style={{ color: color }} />
      </div>
      <div className="flex items-center">
        <h4 className="text-sm font-semibold ml-1">{title}</h4>
        <h5 className="px-1">{count}</h5>
      </div>
    </div>
  );
}

export default InputFeed;
