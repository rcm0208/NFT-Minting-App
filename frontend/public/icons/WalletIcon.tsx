'use client';

import * as React from 'react';
import { SVGProps } from 'react';

const WalletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={15}
      viewBox="0 0 17 15"
      fill="none"
      {...props}
    >
      <path
        d="M16 7.5C16 7.00272 15.8025 6.52581 15.4508 6.17417C15.0992 5.82254 14.6223 5.625 14.125 5.625H11C11 6.28804 10.7366 6.92393 10.2678 7.39277C9.79893 7.86161 9.16304 8.125 8.5 8.125C7.83696 8.125 7.20107 7.86161 6.73223 7.39277C6.26339 6.92393 6 6.28804 6 5.625H2.875C2.37772 5.625 1.90081 5.82254 1.54917 6.17417C1.19754 6.52581 1 7.00272 1 7.5M16 7.5V12.5C16 12.9973 15.8025 13.4742 15.4508 13.8258C15.0992 14.1775 14.6223 14.375 14.125 14.375H2.875C2.37772 14.375 1.90081 14.1775 1.54917 13.8258C1.19754 13.4742 1 12.9973 1 12.5V7.5M16 7.5V5M1 7.5V5M16 5C16 4.50272 15.8025 4.02581 15.4508 3.67417C15.0992 3.32254 14.6223 3.125 14.125 3.125H2.875C2.37772 3.125 1.90081 3.32254 1.54917 3.67417C1.19754 4.02581 1 4.50272 1 5M16 5V2.5C16 2.00272 15.8025 1.52581 15.4508 1.17417C15.0992 0.822544 14.6223 0.625 14.125 0.625H2.875C2.37772 0.625 1.90081 0.822544 1.54917 1.17417C1.19754 1.52581 1 2.00272 1 2.5V5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WalletIcon;