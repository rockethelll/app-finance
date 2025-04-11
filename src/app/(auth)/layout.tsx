import Image from 'next/image';
import logo from '../../../public/images/logo-large.svg';
import loginImg from '../../../public/images/Login.png';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between min-h-screen bg-beige-100">
      <div className="relative hidden min-h-screen p-5 grow max-w-2/5 lg:block">
        <Image
          src={loginImg}
          alt="login"
          fill={false}
          priority
          className="object-cover h-full rounded-xl"
        />
        <Image
          src={logo}
          alt="logo"
          fill={false}
          height={22}
          className="absolute top-15 left-15"
        />
        <p className="absolute text-2xl font-bold text-white bottom-32 left-15 w-[80%] max-w-[300px] custom-text-preset-1 whitespace-normal">
          Keep track of your money and save for the future
        </p>
        <p className="absolute bottom-15 left-15 text-white w-[80%] max-w-[420px] custom-text-preset-4 whitespace-normal">
          Personal finance app puts you in control of your spending. Track
          transactions, set budgets, and add to savings pots easily.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-[104px] w-full lg:max-w-3/5 lg:px-0">
        <div className="bg-grey-900 w-full h-[70px] fixed top-0 left-0 right-0 z-10 rounded-b-lg flex items-center justify-center lg:hidden">
          <Image src={logo} alt="logo" fill={false} height={22} />
        </div>
        <div className="px-5 py-6 bg-white rounded-xl min-w-[340px] max-w-[560px] w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
