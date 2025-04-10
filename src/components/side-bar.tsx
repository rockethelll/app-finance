'use client';

import Tabs from '@/components/tabs';
import { navIcons } from '@/lib/constants';
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="absolute bg-grey-900 rounded-t-xl lg:rounded-l-none lg:rounded-r-xl h-[52px] md:h-[74px] bottom-0 w-full lg:top-0 lg:w-[300px] lg:h-screen flex justify-evenly items-end">
      {navIcons.map((icon) => (
        <Tabs
          key={icon.href}
          icon={icon.icon}
          href={icon.href}
          label={icon.label}
          isActive={isActive(icon.href)}
        />

      ))}
    </nav>
  );
};

export default SideBar;
