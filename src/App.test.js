import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';




it('submits the form with the correct data when the Make Your Reservation button is clicked', () => {
  const handleSubmit = jest.fn(() => true);
    const availableTimes = ['17:00',
     '18:00', '19:00'];
    const { getByLabelText, getByText } = render(
      <BookingForm availableTimes={availableTimes} onSubmit={handleSubmit} />
    );

    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Email Address'), { target: { value: 'johndoe@example.com' } });
    fireEvent.change(getByLabelText('Phone Number'), { target: { value: '123-456-7890' } });
    fireEvent.change(getByLabelText('Choose Date'), { target: { value: '2023-04-15' } });
    fireEvent.change(getByLabelText('Choose Time'), { target: { value: '18:00' } });
    fireEvent.change(getByLabelText('Number of Guests'), { target: { value: '4' } });
    fireEvent.change(getByLabelText('Occasion'), { target: { value: 'Birthday' } });
    fireEvent.change(getByLabelText('Seating Location'), { target: { value: 'Indoor' } });
    fireEvent.change(getByLabelText('Do you require accessibility options?'), { target: { value: 'No' } });
    fireEvent.click(getByText('Make Your Reservation'));

    expect(handleSubmit).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      date: '2023-04-15',
      time: '18:00',
      guests: '4',
      occasion: 'Birthday',
      seating: 'Indoor',
      accessibility: 'No'
    });
  });
