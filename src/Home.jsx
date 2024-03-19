import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <div>home</div>
      <div>Daftar Aplikasi</div>
      <div className="flex flex-col">
        <Link to={`/counter-app`}>Counter App</Link>
        <Link to={`/colour-picker-app`}>Colour Picker App</Link>
        <Link to={`/shopping-list-app`}>Shopping List App</Link>
      </div>
    </div>
  );
}
