import React from 'react';
import './HeaderItem.scss';
import { Link } from 'react-router-dom';
import IheaderItem from '../../interfaces/headerItem';

const HeaderItem: React.FunctionComponent<IheaderItem> = (
  props: IheaderItem
) => {
  return (
    <li className="nav-item">
      <Link to={props.route}>{props.text}</Link>
    </li>
  );
};

export default HeaderItem;
