import { CSSProperties, FC, useEffect, useState } from 'react'
import { Typography, useTheme } from '@mui/material'
import { Link } from 'react-scroll'
/*  */
import { useAppDispatch } from '../../../hooks';
import { appSetActiveMenu } from '../../../redux';


interface Props {
	label: string;
	to: string;
	isMobile?: boolean,
	onActiveLink?: () => void
}
export const ScrollLink: FC<Props> = ({ to, label, isMobile = false, onActiveLink }) => {
	
	const [ page, setPage ] = useState( '' )
	const theme = useTheme()
	const dispatch = useAppDispatch()
	const styles = {
		'--bgScrollLink': theme.palette.primary.main,
	} as CSSProperties

	/* functions */
	const onChangeLink = () => {
		onActiveLink && onActiveLink()
	}

	/* effects */
	useEffect(() => { 
		
		dispatch( appSetActiveMenu( to ) ) 
	}, [ page, dispatch, to ])

	return (
		<Link
			activeClass={ isMobile ? '' : 'activeScrollLink' }
			className={ isMobile ? '' : 'scrollLink' }
			to={ to }
			style={ styles }
			spy={ true }
			smooth={ true }
			isDynamic={ true }
			hashSpy={ true }
			duration={ 400 }
			ignoreCancelEvents={ false }
			onClick={ onChangeLink }
			onSetActive={ () => setPage( to ) }
		>
			<Typography color='textSecondary'  >
				{ label }
			</Typography>
		</Link>
	)
}