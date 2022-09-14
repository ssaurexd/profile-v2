import { render, screen } from '@testing-library/react'
import { MainPresentation } from '../components/'


describe( '<MainPresentation />', () => {

	it( 'SEO: Deberia ser H1 y tener ni nombre', () => {

		render( <MainPresentation /> )

		const h1 = screen.getByTestId('name')

		expect( h1.innerHTML ).toBe( 'Aureliano Torres Sandoval' )
		expect( h1.tagName ).toBe( 'H1' )
	})
})