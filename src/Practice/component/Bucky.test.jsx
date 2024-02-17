import {render, screen} from '@testing-library/react'
import Bucky from './Bucky'

test('Login component', ()=>{
    render(<Bucky></Bucky>)
    const LoginElement =  screen.getByText('Bucky')
    expect(LoginElement).toBeInTheDocument()
})