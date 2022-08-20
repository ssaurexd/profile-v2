import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

	render() {
		return (
			<Html>
				<Head>
					<meta name='robots' content='index, follow' /> 
					<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					{/* Orbitron */}
					<link href='https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap' rel='stylesheet' />
					<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
					{/* <!-- Google tag (gtag.js) --> */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=G-JRBEW042S0`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', 'G-JRBEW042S0');
							`,
						}}
					/>
				</Head>
				
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}