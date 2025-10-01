import { ref } from 'vue';

const bookings = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchBookings = async() => {
  loading.value = true;
  try {
    const response = await fetch('http://localhost:3001/bookings?userId=1');
    bookings.value = await response.json();
  } catch (e) {
    error.value = e;
    console.error('Failed to fetch bookings:', e);
  } finally {
    loading.value = false;
  }
};

const findBookingIndex = (id) => {
    return bookings.value.findIndex( booking => booking.id === id );
  };

  const registrationLoading = ref(false);

  const handleRegistration = async (event) => {
    if (registrationLoading.value) return;
    registrationLoading.value = true;

    if (bookings.value.some( booking => booking.eventId === event.id && booking.userId === 1 )) {
      alert('You have already registered for this event.');
      registrationLoading.value = false;
      return;
    }

    try {
      const newBooking = {
        id: Date.now().toString(),
        userId: 1,
        eventId: event.id,
        eventTitle: event.title,
        status: 'pending'
      };

      bookings.value.push(newBooking);

      try {
        const response = await fetch('http://localhost:3001/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...newBooking, status: 'confirmed' })
        });
        
        if (response.ok) {
          const index = findBookingIndex(newBooking.id);
          bookings.value[index] = await response.json();
        } else {
          throw new Error('Failed to register booking');
        }
      } catch (e) {
        console.error(e);
        bookings.value = bookings.value.filter(b => b.id !== newBooking.id);
      }
    } finally {
      registrationLoading.value = false;
    }
  };

  const cancelRegistrationLoading = ref(false);

  const cancelRegistration = async (bookingId) => {
    if (cancelRegistrationLoading.value) return;
    cancelRegistrationLoading.value = true;
    
    const index = findBookingIndex(bookingId);
    const originalBooking = bookings.value[index];
    bookings.value.splice(index, 1);

    try {
      const response = await fetch(`http://localhost:3001/bookings/${bookingId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to cancel booking');
      }
    } catch (e) {
      console.error(e);
      bookings.value.splice(index, 0, originalBooking);
    } finally {
      cancelRegistrationLoading.value = false;
    }
  };

export default function useBookings() {
  return {
    bookings,
    loading,
    error,
    fetchBookings,
    handleRegistration,
    cancelRegistration
  }
}