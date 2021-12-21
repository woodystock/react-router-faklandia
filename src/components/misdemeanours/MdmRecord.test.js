import { render, screen } from '@testing-library/react';
import MdmRecord from './MdmRecord';

let misdemeanour;

beforeAll(() => {
    misdemeanour = {
        citizenId:1,
        date:new Date().toLocaleDateString(),
        misdemeanour:"rudeness"}
});

test('renders a misdemeanour record', () => {

    render(<MdmRecord misdemeanour={misdemeanour}/>);
    const citizenId = screen.getByText(misdemeanour.citizenId);
    const date = screen.getByText(misdemeanour.date)
    const mdm = screen.getByText(misdemeanour.misdemeanour)
    
    expect(citizenId).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(mdm).toBeInTheDocument();
});

test('renders an image for punishment', () => {

    render(<MdmRecord misdemeanour={misdemeanour}/>);
    const image = screen.getByAltText(/Location of desired punishment/i)
    
    expect(image).toBeInTheDocument();
});

test.each([
    ["rudeness","🤪"],
    ["vegetables","🥗"],
    ["lift","🗣"],
    ["united","😈"],
])('renders a misdemeanour emoji: %s => %s', (type, emoji) => {
    
    misdemeanour.misdemeanour = type;
    render(<MdmRecord misdemeanour={misdemeanour}/>);
    const emojiText = screen.getByText(emoji);

    expect(emojiText).toBeInTheDocument();
});

