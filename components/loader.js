import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    window.$ = window.jQuery = require("jquery");
  });
  return <div className="loader"></div>;
}
