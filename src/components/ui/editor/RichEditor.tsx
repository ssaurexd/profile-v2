import { FC, useEffect, useRef, useState } from 'react'
import { Box, Typography, SxProps } from '@mui/material'




interface Props {
	onChage: ( value: string ) => void;
	value: string;
	label: string;
	sx?: SxProps;
	error?: boolean;
	errorText?: string | undefined | false;
	onTouched?: () => void;
	name?: string;
}

const RichEditor: FC<Props> = ({ value, label, sx, error, errorText, onTouched, onChage }) => {

	const [ isMounted, setIsMounted ] = useState( false )
	const editorRef = useRef<{ CKEditorComponent: any, ClassicEditor: any }>()
	const { CKEditorComponent, ClassicEditor } = editorRef.current || {}

	/* effects */
	useEffect( () => {

		editorRef.current = {
			CKEditorComponent: require( '@ckeditor/ckeditor5-react' ),
			ClassicEditor: require( '@ckeditor/ckeditor5-build-classic' )
		}
		setIsMounted( true )
	}, [])

	const CKEditor = CKEditorComponent?.CKEditor

	return isMounted ? (
		<Box sx={ sx } >
			<Typography variant='body2' color='inherit' my={ 1 } >{ label }
				{ error && <Typography component='span' color='red' variant='body2'>{ errorText }</Typography> }
			</Typography>
			<CKEditor
				editor={ ClassicEditor }
				data={ value }
				onChange={ ( event: any, editor: any ) => {

					const data = editor.getData()
					onChage( data )
				}}
				onBlur={( ) => {

					onTouched && onTouched( )
				}}
			/>
		</Box>
	) : <Typography>Editor loading</Typography>
}

export default RichEditor