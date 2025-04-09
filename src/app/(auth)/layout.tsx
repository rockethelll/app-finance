import Image from 'next/image';
import logo from '../../../public/images/logo-large.svg';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-[104px] bg-beige-100">
      <div className="bg-grey-900 w-full h-[70px] fixed top-0 left-0 right-0 z-10 rounded-b-lg flex items-center justify-center">
        <Image
          src={logo}
          alt="logo"
          fill={false}
          height={22}
        />
      </div>
      <div className="px-5 py-6 bg-white rounded-xl min-w-[340px] max-w-[560px] w-full">
      {children}
      </div>
    </div>
  );
};

export default Layout;
