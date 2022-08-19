import { FC } from 'react'
import Head from 'next/head'


interface Props {
	description: string;
	title: string;
	urlImage: string;
	url: string;
	keywords?: string[];
	facebookDesc?: string;
	facebookTitle?: string;
	facebookUrlImage?: string;
	twitterDesc?: string;
	twitterTitle?: string;
	twitterUrlImage?: string;
}
export const SEO: FC<Props> = ( props ) => {

	const {
		description,
		title,
		urlImage,
		url,
		facebookDesc,
		keywords,
		facebookTitle,
		facebookUrlImage,
		twitterDesc,
		twitterTitle,
		twitterUrlImage
	}  = props

	return (
		<Head>
			<meta name='robots' content='index, follow' />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			{/* Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={ url } />
			<meta property="og:title" content={ facebookTitle ? facebookTitle : title } />
			<meta property="og:description" content={ facebookDesc ? facebookDesc : description } />
			<meta property="og:image" content={ facebookUrlImage ? facebookUrlImage : urlImage } />
			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={ url } />
			<meta property="twitter:title" content={ twitterTitle ? twitterTitle : title } />
			<meta property="twitter:description" content={ twitterDesc ? twitterDesc : description } />
			<meta property="twitter:image" content={ twitterUrlImage ? twitterUrlImage : urlImage } />
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			{/* Extra */}
			{ keywords && <meta name="keywords" content={ keywords.join( ' ' ) } /> }
			<title>{ title }</title>
		</Head>
	)
}