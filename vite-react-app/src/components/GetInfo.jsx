import { useState } from 'react';
import React from 'react';

export default function GetInfo() {
	const [count, setCount] = useState(0);
	return [
		React.createElement('h1', null, 'Vite + React'),
		React.createElement('div', { className: 'card' }, [
			React.createElement(
				'button',
				{ onClick: () => setCount((count) => count + 1), key: 1 },
				`count is ${count}`,
			),
			React.createElement(
				'p',
				{ key: 2 },
				'Edit <code>src/App.jsx</code> and save to test HMR',
			),
		]),
		React.createElement(
			'p',
			{ className: 'read-the-docs' },
			'Click on the Vite and React logos to learn more',
		),
	];
}

{
	/* <h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>

			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p> */
}
