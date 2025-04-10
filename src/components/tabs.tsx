'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

type TagsProps = {
  icon: React.ReactNode;
  href: string;
  label: string;
  isActive: boolean;
};

const Tabs = ({ icon, href, label, isActive }: TagsProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'h-[44px] md:h-[66px] w-[68px] md:w-[104px] rounded-t-lg bg-grey-900 flex items-center justify-center',
        isActive ? 'bg-beige-100 border-green border-b-4' : 'group',
      )}
    >
      <div className="flex flex-col items-center">
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
            'custom-custom-text-preset-*5-bold hidden md:block',
            isActive
              ? 'text-grey-900'
              : 'text-grey-300 group-hover:text-beige-100 transition-all duration-300',
          )}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default Tabs;
