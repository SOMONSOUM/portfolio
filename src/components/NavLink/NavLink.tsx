import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import { Icon } from './NavLink.style';

type NavLinkProps = {
  router: any;
  href: string;
  label: string;
  intlId?: string;
  icon?: React.ReactNode;
  className?: string;
  iconClass?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  intlId,
  router,
  icon,
  className,
  onClick,
  iconClass,
}) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;
  return (
    <div onClick={onClick} className={className ? className : ''}>
      <Link href={href}>
        <a className={isCurrentPath ? 'current-page' : ''}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {icon ? <Icon className={iconClass}>{icon}</Icon> : ''}
          <span className="label">
            {intlId ? (
              <FormattedMessage
                id={intlId ? intlId : 'defaultNavLinkId'}
                defaultMessage={label}
              />
            ) : (
                label
              )}
          </span>
        </a>
      </Link>
    </div>
  )
}

export default withRouter(NavLink);