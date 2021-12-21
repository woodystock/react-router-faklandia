import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { types } from '../generate_misdemeanours';
import MdmHeader from './MdmHeader';

test('renders header for misdemeanours table', () => {
  render(<MdmHeader />);
  const idHeader = screen.getByText(/Citizen Id/i);
  const dateHeader = screen.getByText(/Date/i);
  const misdemeanourHeader = screen.getByText(/Misdemeanour/i);
  const punishHeader = screen.getByText(/Punishment Idea/i);

  expect(idHeader).toBeInTheDocument();
  expect(dateHeader).toBeInTheDocument();
  expect(misdemeanourHeader).toBeInTheDocument();
  expect(punishHeader).toBeInTheDocument();
});

test('renders misdemeanours combobox', () => {
    render(<MdmHeader />);
    const misdemeanourCombo = screen.getAllByRole("combobox").filter((element) => element.id === "m-select");
  
    expect(misdemeanourCombo.length).toBe(1);
    expect(misdemeanourCombo[0]).toBeInTheDocument();
  });

  test('renders combobox options', () => {
    render(<MdmHeader />);
    const mOptions = [];

    const allTypes = ["view all", ...types];
    
    allTypes.forEach((type) => {
        const option = screen.getByRole('option', {name:type});
        if(option)
            mOptions.push(option);
    })
  
    expect(mOptions.length).toBe(allTypes.length);

    mOptions.forEach((option) => {
        expect(option).toBeInTheDocument();
    })
  });

  test('combobox starts with view all', () => {
    render(<MdmHeader />);

    const viewAllOption = screen.getByRole("option", {name:"view all"})

    expect(viewAllOption.selected).toBe(true);
  });

  test('user can change selected option', () => {
    const mockFilter = jest.fn();

    render(<MdmHeader setFilter={mockFilter}/>);

    types.forEach((type) => {
        userEvent.selectOptions(
            screen.getByRole("combobox"),
            screen.getByRole('option',{name: type})
        )

        const selectedOption = screen.getByRole("option", {name:type})

        expect(selectedOption.selected).toBe(true);
    })
  });