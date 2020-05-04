import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import Home from './screens/Home/index';
import ContactUs from './screens/ContactUs/index';
import UserGuide from './screens/UserGuide/index';

const routes = [
  {
    path: '/',
    text: 'Home',
    exact: true,
    icon: <HomeIcon />,
    main: () => <Home />,
  },
  {
    path: '/contact-us',
    text: 'Contact Us',
    icon: <ContactPhoneIcon />,
    main: () => <ContactUs />,
  },
  {
    path: '/user-guide',
    text: 'User Guide',
    icon: <MenuBookIcon />,
    main: () => <UserGuide />,
  },
];

export default routes;
