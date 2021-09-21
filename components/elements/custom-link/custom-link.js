import React from 'react';
import Link from 'next/link';

import IsUrl from '@/utilities/is-url';

export default function CustomLink({ link, children }) {
  const isInternalLink = link.startsWith('/');
  const isExternalLink = IsUrl(link);

  if (isInternalLink) {
    return (
      <Link href={link}>
        <a>{children}</a>
      </Link>
    );
  }

  if (isExternalLink) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <a href={link} target="_self">
      {children}
    </a>
  );
}
