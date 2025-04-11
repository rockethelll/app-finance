'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

type TabItem = {
  icon: React.ReactNode;
  href: string;
  label: string;
  isActive: boolean;
};

type TabsProps = {
  tab: TabItem;
  isCollapsed: boolean;
};

const Tabs = ({
  tab: { icon, href, label, isActive },
  isCollapsed,
}: TabsProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'h-[44px] md:h-[66px] lg:h-[56px] w-[68px] md:w-[104px] lg:w-[276px] rounded-t-lg lg:rounded-t-none lg:rounded-r-lg bg-grey-900 flex items-center justify-center lg:justify-start lg:pl-8 transition-all duration-300 ease-in-out',
        isActive
          ? 'bg-beige-100 border-green border-b-4 lg:border-b-0 lg:border-l-4'
          : 'group',
        isCollapsed && 'lg:w-[90px] lg:justify-center lg:pl-0',
      )}
    >
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-4">
        <div
          className={cn(
            'w-6 h-6',
            isActive
              ? 'text-green'
              : 'text-grey-300 group-hover:text-beige-100 transition-all duration-300',
          )}
        >
          {icon}
        </div>
        <span
          className={cn(
            'custom-text-preset-5-bold hidden md:block lg:text-base lg:font-bold whitespace-nowrap overflow-hidden text-ellipsis',
            isActive
              ? 'text-grey-900'
              : 'text-grey-300 group-hover:text-beige-100 transition-all duration-300',
            isCollapsed && 'lg:hidden',
          )}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default Tabs;
