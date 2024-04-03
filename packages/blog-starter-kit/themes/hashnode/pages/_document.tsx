import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="nl">
			<Head />
			<body>
				<Main />
				<NextScript />
				<div id="hn-toast" />
			</body>
		</Html>
	);
}
