import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = props => {
	const { children } = props;

	return (
		<div>
			<Head>
				<title>BazaarWhere - Where ah?</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
				<link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
				<link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
			</Head>

			<main className="container grid-xl">
				<Navbar />
					{ children }
				<Footer />
			</main>
		</div>
	)
}

export default Layout;