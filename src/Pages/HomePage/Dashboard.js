import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../../Layouts/Wrapper';



export function Dashboard() {
  return (
    <div>
        <Link to="/admin">Admin Page</Link>
        <Wrapper children={<div>Hola Mundo</div>} />
    </div>
  );
}

export default Dashboard;