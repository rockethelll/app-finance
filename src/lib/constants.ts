import {
  ArrowDownUp,
  House,
  ChartPie,
  PiggyBank,
  ReceiptText,
} from 'lucide-react';
import React from 'react';

export const navIcons = [
  {
    icon: React.createElement(House),
    href: '/overview',
    label: 'Overview',
  },
  {
    icon: React.createElement(ArrowDownUp),
    href: '/transactions',
    label: 'Transactions',
  },
  {
    icon: React.createElement(ChartPie),
    href: '/budgets',
    label: 'Budgets',
  },
  {
    icon: React.createElement(PiggyBank),
    href: '/pots',
    label: 'Pots',
  },
  {
    icon: React.createElement(ReceiptText),
    href: '/recurring-bills',
    label: 'Recurring Bills',
  },
];
