import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Loader from "./loader";

export default function Layout({ preview, children }) {
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
