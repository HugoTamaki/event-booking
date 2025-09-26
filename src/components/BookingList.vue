<template>
  <h2 class="text-2xl font-medium">Your Bookings</h2>
  <section class="grid grid-cols-1 gap-4">
    <template v-if="!loading">
      <BookingItem v-for="booking in bookings" :key="booking.id" :title="booking.eventTitle" :status="booking.status" @cancelled="cancelRegistration(booking.id)"/>
    </template>
    <template v-else>
      <LoadingBookingCard v-for="i in 2" :key="i"/>
    </template>
  </section>
</template>

<script setup>
  import { onMounted } from 'vue';

  import BookingItem from '@/components/BookingItem.vue';
  import LoadingBookingCard from '@/components/LoadingBookingCard.vue';
  import useBookings from '@/composables/useBookings';

  const { bookings, loading, cancelRegistration, fetchBookings } = useBookings();

  onMounted(() => {
    fetchBookings();
  });
</script>