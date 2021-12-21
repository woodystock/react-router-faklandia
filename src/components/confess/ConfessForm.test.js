import { render, screen } from '@testing-library/react';
import ConfessForm from './ConfessForm';


test('confess is disabled when input is clear', () => {
    const formData = {
        subject:"",
        reason:"",
        confession:""
    } 


  render(<ConfessForm formData={formData}/>);
  const button = screen.getByRole("button", {type:"submit"});

  expect(button).toBeDisabled();
});

test('confess is enabled when input is valid', () => {

    const formData = {
        subject:"Subject",
        reason:"rudeness",
        confession:"This is a confession that is at least twenty characters long"
    } 

    render(<ConfessForm formData={formData}/>);
    const button = screen.getByRole("button", {type:"submit"});
  
    expect(button).toBeEnabled();
  });