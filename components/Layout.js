import Head from "next/head";
import Navbar from "./NavBar";

const Layout = props => (
  <div>
    <Head>
      <title>Bitprice</title>
      <link
        rel="stylesheet "
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      ></link>
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);
export default Layout;
