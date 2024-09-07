import { render, screen, fireEvent } from '@testing-library/react';
import ItemForm from '../components/ItemForm'; // Adjust path as necessary

test('adds a new item to the list when the form is submitted', () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  
  screen.debug();


  fireEvent.change(screen.getByLabelText(/Name:/i), {
    target: { value: 'Ice Cream' },
  });

  fireEvent.change(screen.getByLabelText(/Category:/i), {
    target: { value: 'Dessert' },
  });


  fireEvent.click(screen.getByText(/Add to List/i));

 
  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      name: 'Ice Cream',
      category: 'Dessert',
    })
  );
});
