import React from 'react';
import './HeaderItem.scss';
import { NavLink } from 'react-router-dom';
import IheaderItem from '../../interfaces/headerItem';

const HeaderItem: React.FunctionComponent<IheaderItem> = (
  props: IheaderItem
) => {
  return (
    <li className="nav-item">
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        to={props.route}
      >
        {props.text}
      </NavLink>
    </li>
  );
};

export default HeaderItem;
