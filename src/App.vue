<script setup>
  import { ref, onMounted } from 'vue';

  import EventList from '@/components/EventList.vue';
  import BookingList from '@/components/BookingList.vue';

</script>

<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <EventList />
    <BookingList />
  </main>
</template>

<style scoped></style>
