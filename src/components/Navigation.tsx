import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          <NavLink to="/" active={isActive('/')}>Home</NavLink>
          <NavLink to="/rankings" active={isActive('/rankings')}>Rankings</NavLink>
          <NavLink to="/sources" active={isActive('/sources')}>Sources</NavLink>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

function NavLink({ to, active, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`py-4 px-1 inline-flex items-center border-b-2 text-sm font-medium whitespace-nowrap
        ${active 
          ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}`}
    >
      {children}
    </Link>
  );
}