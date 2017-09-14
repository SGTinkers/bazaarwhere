import React from 'react';
import Link from 'next/link';

import Layout from '../layouts/Layout';

class Index extends React.Component {
	render() {
		return (
			<Layout>
				<h1>Hello world!</h1>
				<Link
					href={{ pathname: '/about' }}>
					<a>About</a>
				</Link>
			</Layout>
		)
	}
}

export default Index;