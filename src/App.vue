<script setup>
  import EventCard from '@/components/EventCard.vue';
  import BookingItem from '@/components/BookingItem.vue';
</script>

<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <EventCard title="Noansons" when="2025-09-29" description="bnaos asbhodh dhoshd" @register="console.log('Registered!')"/>
      <EventCard title="Nnlanlna" when="2025-09-29" description="bnaos asbhodh dhoshd"/>
      <EventCard title="Nnosnaos" when="2025-09-29" description="bnaos asbhodh dhoshd"/>
      <EventCard title="Anosoansa" when="2025-09-29" description="bnaos asbhodh dhoshd"/>
    </section>
    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <section class="grid grid-cols-1 gap-4">
      <BookingItem />
    </section>
  </main>
</template>

<style scoped></style>
