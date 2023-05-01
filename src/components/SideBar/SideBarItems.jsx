import React from 'react';


function SideBarItems({ imageUrl, title, Icon }) {
  return (
    <div className="flex p-2 hover:bg-neutral-300">
      <div className="pr-2 pt-2">
        {Icon ? (
          <Icon/>
        ) : (
          <img className="h-6 w-6 rounded" src={imageUrl} alt="image" />
        )}
      </div>
      <div className="w-20">
        <h4 className="text-sm text-black opacity-60 font-semibold">{title}</h4>
      </div>
    </div>
  );
}

export default SideBarItems;
