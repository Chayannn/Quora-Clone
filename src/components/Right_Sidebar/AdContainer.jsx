import React from 'react';
import Ads from './Ads';

function AdContainer() {
  return (
    // Container
    <div className=" flex-1 mt-4 ml-4">
      {/* Inner */}
      <div className="shadow-sm pt-10 border">
        <Ads />
      </div>
    </div>
  );
}

export default AdContainer;
