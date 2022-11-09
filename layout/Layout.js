import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
const Layout = ({ children }) => {
  //   console.log(children);
  return (
    <>
      <Head>
        <title>Blog App</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
