import React from "react";

function Loader({ show }) {
  return show ? (
    <div class="lds-ripple">
      <div></div>
    </div>
  ) : (
    <></>
  );
}

export default Loader;
