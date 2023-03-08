'use client';

import Image from 'next/image';

import logo from '../public/logo.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => (
	<nav className='px-4 sm:px-8 xl:px-[11dvw] py-4 relative mx-auto border-b-2 border-gray-400'>
		<div className='flex justify-between px-8 xl:px-0'>
			<div className='flex items-center text-white font-poppins text-[24px] font-bold'>
				<Image src={logo} alt='logo' width={64} className='px-2' />
				SynthSociety
			</div>
			<div className='hidden sm:flex items-center'>
				<ConnectButton />
			</div>
		</div>
	</nav>
);

export default Navbar;
