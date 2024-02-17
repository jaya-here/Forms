import {render, screen} from '@testing-library/react'
import { NamewithToggle } from './NamewithToggle'

jest.mock('./withToggle')

test('Login component', ()=>{
    render(<NamewithToggle name={'Jaya'}></NamewithToggle>)
    const LoginElement =  screen.getByText('Jaya')
    expect(LoginElement).toBeInTheDocument()
})