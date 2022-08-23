import { useState, FC } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
/*  */
import { IProject } from '../../../interfaces'

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean
}

const ExpandMore = styled(( props: ExpandMoreProps ) => {
	const { expand, ...other } = props
	return <IconButton {...other} />
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}))

interface Props {
	project: IProject
}
export const ProjectCard: FC<Props> = ({ project: { description, image, title, githubUrl, viewUrl } }) => {

	const [ expanded, setExpanded ] = useState( false )

	/* functions */
	const handleExpandClick = () => setExpanded( !expanded )

	return (
		<Card className='projectCard' >
			<CardMedia
				component='img'
				image={ image }
				alt={ title }
				sx={{
					width: '100%',
					height: '182px',
					objectFit: 'cover'
				}}
			/>
			<CardContent>
				<Typography color='textSecondary' variant='h6' >{ title }</Typography>
			</CardContent>
			<CardActions disableSpacing sx={{ color: theme => theme.palette.text.secondary }}>
				{ githubUrl &&
					<IconButton color='inherit' href={ githubUrl } target='_blank' >
						<GitHubIcon color='inherit' />
					</IconButton>
				}
				{ viewUrl && 
					<IconButton color='inherit' href={ viewUrl } target='_blank' >
						<OpenInNewIcon color='inherit'  />
					</IconButton>
				}
				<ExpandMore
					expand={ expanded }
					onClick={ handleExpandClick }
					aria-expanded={ expanded }
					color='inherit' 
				>
					<ExpandMoreIcon color='inherit' />
				</ExpandMore>
			</CardActions>
			<Collapse in={ expanded } timeout='auto' unmountOnExit >
				<CardContent>
					<Typography paragraph fontSize='large' color='textSecondary'>
						{ description }
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	)
}
