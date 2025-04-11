'use client';

import Tabs from '@/components/tabs';
import { navIcons } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import largeLogo from '../../public/images/logo-large.svg';
import smallLogo from '../../public/images/logo-small.svg';
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';
import { cn } from '@/lib/utils';
import useSidebarStore from '@/stores/sidebar-store';
import { useEffect } from 'react';

const SideBar = () => {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar, isLoading, setLoaded } =
    useSidebarStore();
  const isActive = (href: string) => pathname === href;

  // This is to prevent the sidebar from flashing when the page is loaded
  useEffect(() => {
    setLoaded();
  }, [setLoaded]);

  if (isLoading) {
    return null;
  }

  return (
    <nav
      className={cn(
        'absolute bg-grey-900 rounded-t-xl lg:rounded-l-none lg:rounded-r-xl h-[52px] md:h-[74px] bottom-0 w-full lg:top-0 lg:h-screen flex lg:flex-col justify-evenly lg:justify-start items-end lg:items-start lg:space-y-1 transition-all duration-300',
        isCollapsed ? 'lg:w-[100px]' : 'lg:w-[300px]',
      )}
    >
      {isCollapsed ? (
        <Image
          src={smallLogo}
          alt="Small logo"
          height={30}
          width={50}
          className="hidden h-32 pl-8 mb-6 text-center transition-opacity duration-300 lg:inline"
        />
      ) : (
        <Image
          src={largeLogo}
          alt="Large logo"
          fill={false}
          height={30}
          width={200}
          className="hidden h-32 pl-8 mb-6 text-center transition-opacity duration-300 lg:inline"
        />
      )}
      {navIcons.map((icon) => (
        <Tabs
          key={icon.href}
          tab={{
            icon: icon.icon,
            href: icon.href,
            label: isCollapsed ? '' : icon.label,
            isActive: isActive(icon.href),
          }}
          isCollapsed={isCollapsed}
        />
      ))}
      <div
        onClick={toggleSidebar}
        className={cn(
          'h-[56px] w-[276px] rounded-r-lg bg-grey-900 hidden lg:flex items-center pl-8 mt-auto mb-32 cursor-pointer group',
          isCollapsed && 'w-[90px] justify-center pl-0',
        )}
      >
        <div className="flex items-center space-x-4">
          {isCollapsed ? (
            <ArrowBigRightDash className="w-6 h-6 transition-all duration-300 text-grey-300 group-hover:text-beige-100" />
          ) : (
            <>
              <ArrowBigLeftDash className="w-6 h-6 transition-all duration-300 text-grey-300 group-hover:text-beige-100" />
              <p className="transition-all duration-300 custom-text-preset-5-bold lg:text-base lg:font-bold text-grey-300 group-hover:text-beige-100">
                Minimize Menu
              </p>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
