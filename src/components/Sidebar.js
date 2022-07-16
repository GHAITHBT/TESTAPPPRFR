import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Acceuil',
    path: '/Acceuil',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Article',
    path: '/Article',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
 {
    title: 'Bon de laivraison',
    path: '/BL',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Bon de Commande',
    path: '/Commande',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Facture',
    path: '/Facture',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  
  {
    title: 'Employer',
    path: '/Employer',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Client',
    path: '/Client',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Caisse',
    path: '/caisse',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
 
  
];