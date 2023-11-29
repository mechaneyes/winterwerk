import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Loader from "./loader";
import $ from "jquery";
import { useEffect } from "react";

export default function Layout({ preview, children }) {
  useEffect(() => {
    $(document).ready(function () {
      $('.simple-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
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
      <Loader />
    </>
  );
}
