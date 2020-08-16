import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginScreen from './index';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event'

test('renders learn react link', () => {
    const { getByText } = render(<LoginScreen />);
    const linkElement = getByText(/Welcome to sCart/i);
    expect(linkElement).toBeInTheDocument();
});


// test('delete characters within the selectedRange', () => {
//     render(
//         <div>
//             <label htmlFor="my-input">Example:</label>
//             <input id="my-input" type="text" value="This is a bad example" />
//         </div>,
//     )
//     const input = screen.getByLabelText(/example/i)
//     input.setSelectionRange(10, 13)
//     userEvent.type(input, '{backspace}good')

//     expect(input).toHaveValue('This is a good example')
// })



test('click', async () => {
    const { getByRole } = render(<textarea />)
  
    await userEvent.type(getByRole('textbox'), 'Hello, World!')
    expect(getByRole('textbox')).toHaveAttribute('value', 'Hello, World!')
  })