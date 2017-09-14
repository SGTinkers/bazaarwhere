import React from 'react';
import Link from 'next/link';

const Navbar = props => {
	return (
		<header className="navbar">
			<section className="navbar-section">
				<Link href="/" prefetch>
					<a className="navbar-brand mr-2">BazaarWhere</a>
				</Link>
			</section>

			<section className="navbar-section">
				<Link href="/about" prefetch>
					<a className="btn btn-link">About</a>
				</Link>

				<div className="dropdown">
					<a href="#" className="btn btn-link dropdown-toggle" tabindex="0">
						My Account <i className="icon icon-caret"></i>
					</a>

					<ul className="menu">
						<li>
							<Link href="https://github.com/picturepan2/spectre" prefetch>
								<a className="btn btn-link">GitHub</a>
							</Link>
						</li>
					</ul>
				</div>
			</section>
		</header>
	)
}

export default Navbar;