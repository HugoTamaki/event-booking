<script setup>
  import { ref, onMounted } from 'vue';

  import BookingItem from '@/components/BookingItem.vue';
  import LoadingBookingCard from '@/components/LoadingBookingCard.vue';
  import EventList from '@/components/EventList.vue';
  import useBookings from '@/composables/useBookings';

  const { bookings, loading, fetchBookings, cancelRegistration } = useBookings();

  onMounted(() => {
    fetchBookings();
  });
</script>

<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <EventList />

    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <section class="grid grid-cols-1 gap-4">
      <template v-if="!loading">
        <BookingItem v-for="booking in bookings" :key="booking.id" :title="booking.eventTitle" :status="booking.status" @cancelled="cancelRegistration(booking.id)"/>
      </template>
      <template v-else>
        <LoadingBookingCard v-for="i in 2" :key="i"/>
      </template>
    </section>
  </main>
</template>

<style scoped></style>
