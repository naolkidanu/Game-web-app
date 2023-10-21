import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/navBar/Navbar';

test('Navbar component snapshot', () => {
  const data = 'Sample Data';

  const { asFragment } = render(
    <MemoryRouter>
      <Navbar data={data} />
    </MemoryRouter>,
  );

  expect(asFragment()).toMatchSnapshot();
});
