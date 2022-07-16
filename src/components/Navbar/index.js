import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
		      wassimos
		</NavLink>
		<NavLink to='/events' activeStyle>
			Gadour lmiboun
		</NavLink>
		<NavLink to='/annual' activeStyle>
			firas ben ramdhan
		</NavLink>
		<NavLink to='/team' activeStyle>
			chwafra
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Date SRTJ
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign in</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
