/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';

import { theme } from '../../styles/theme';

export type NavLinkProps = {
  href: string;
  target?: string;
  children: ReactNode | string;
};

export const NavLink = ({ href, target, children, ...props }: NavLinkProps) => {
  return (
    <a
      href={href}
      target={target || '_blank'}
      sx={{
        fontSize: ['18px', '22px'],
        fontFamily: 'body',
        fontStyle: 'medium',
        lineHeight: '30px',
        textDecoration: 'none',
        color: 'text',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap',
        display: 'inline',
        cursor: 'pointer',
        '&::after': {
          content: 'close-quote',
          display: 'none',
          width: '100%',
          height: '3px',
          backgroundColor: 'primary',
          position: 'absolute',
          left: 0,
          bottom: ['-1px', '-5px'],
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
          transition: 'transform .3s ease, opacity .3s ease',
        },
        '&:hover': {
          transition: 'all 0.3s ease',
          '&::after': {
            display: 'inline',
            transform: 'translate3d(0, 100%, 0)',
            boxShadow: `0px 0px 8px ${theme.colors.primary}`,
          },
        },
        '&:visited, &:active, &:focus': {
          color: 'text',
          opacity: '80%',
          transition: 'all 0.3s ease',
          '&::after': {
            backgroundColor: 'primary',
          },
        },
        '&:visited:hover, &:active:hover, &:focus:hover': {
          color: 'text',
          transition: 'all 0.3s ease',
          '&::after': {
            transform: 'translate3d(0, 100%, 0)',
          },
        },
      }}
      {...props}
    >
      {children}
    </a>
  );
};
