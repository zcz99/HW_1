import React from 'react';
import viteLogo from '/vite.svg';
import reactLogo from '../assets/react.svg';

export default function GetImages() {
	return React.createElement('div', null, [
		React.createElement(
			'a',
			{ href: 'https://vite.dev', target: '_blank', key: 1 },
			React.createElement('img', {
				src: viteLogo,
				className: 'logo',
				alt: 'Vite logo',
				key: 2,
			}),
		),

		React.createElement(
			'a',
			{ href: 'https://react.dev', target: '_blank', key: 3 },
			React.createElement('img', {
				src: reactLogo,
				className: 'logo react',
				alt: 'React logo',
				key: 4,
			}),
		),
	]);
}

{
	/* <div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div> */
}
