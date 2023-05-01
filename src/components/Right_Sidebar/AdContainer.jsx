import React from 'react';
import Ads from './Ads';

function AdContainer() {
  return (
    // Container
    <div className=" flex-[0.3] mt-4 ">
      {/* Inner */}
      <div className="shadow-sm ml-4 pt-10 border">
        <Ads />
      </div>
    </div>
  );
}

export default AdContainer;
