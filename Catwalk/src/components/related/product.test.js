import React from 'react';
import { render, screen } from '@testing-library/react';

import AddOutfitCard from './relatedComponents/AddOutfitCard.jsx';

describe('AddOutfitCard', () => {
  test('renders AddOutfitCard with text', async () => {
    render(<AddOutfitCard />);

    expect(screen.getByText('Add to Outfit')).toBeInTheDocument();
  });
});