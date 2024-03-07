import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

it("renders the app", () => {
    render(<App />);
});
