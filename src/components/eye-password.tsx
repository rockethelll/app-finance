'use client';

import showPassword from './../../public/images/icon-show-password.svg';
import hidePassword from './../../public/images/icon-hide-password.svg';
import Image from 'next/image';

type EyePasswordProps = {
  isView: boolean;
  setIsView: (isView: boolean) => void;
};

const EyePassword = ({ isView, setIsView }: EyePasswordProps) => {
  return (
    <Image
      src={isView ? hidePassword : showPassword}
      className="absolute z-10 cursor-pointer right-4 top-8"
      alt="eye"
      fill={false}
      onClick={() => setIsView(!isView)}
    />
  );
};

export default EyePassword;
