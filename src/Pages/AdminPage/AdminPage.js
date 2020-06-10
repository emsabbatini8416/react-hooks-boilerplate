import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../../Layouts/Wrapper';

export function AdminPage() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <Wrapper children={<span>This is the Admin page</span>} />
    </div>
  );
}

export default AdminPage;