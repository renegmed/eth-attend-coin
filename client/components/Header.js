import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';
export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}> 
      <Link route="/">
        <a className="item">Logo Here</a>
      </Link> 
      
      <Menu.Menu position="right">
        <Link route="/transfer">
          <a className="item">Transfer</a>
        </Link>

        <Link route="/approve">
          <a className="item">Approve</a>
        </Link>
      </Menu.Menu>
    </Menu> 
   
  );
};
