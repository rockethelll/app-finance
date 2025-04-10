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
        'h-[44px] w-[70px] rounded-t-lg bg-grey-900 flex items-center justify-center',
        isActive ? 'bg-beige-100 border-green border-b-4' : 'group',
      )}
    >
      <div>
        <span
          className={cn(
            'text-preset-5-bold',
            isActive
              ? 'text-green'
              : 'text-grey-300 group-hover:text-beige-100 transition-all duration-300',
          )}
        >
          {label}
        </span>
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
      </div>
    </Link>
  );
};

export default Tabs;
