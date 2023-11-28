import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Loader from "./loader";
import $ from "jquery";
import { useEffect } from "react";

export default function Layout({ preview, children }) {
  useEffect(() => {
    $(document).ready(function () {
      console.log("ready!");
    });
  });
  
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <Loader />
    </>
  );
}
