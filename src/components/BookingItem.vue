<template>
  <SectionCard>
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <span>{{ title }}</span>
        <span class="text-sm text-gray-500">({{ status }})</span>
      </div>
      <RoundButton variant="danger" @click="$emit('cancelled')">Cancel</RoundButton>
    </div>
  </SectionCard>
</template>

<script setup>
  import SectionCard from '@/components/SectionCard.vue';
  import RoundButton from '@/components/RoundButton.vue';

  defineEmits(['cancelled']);

  defineProps({
    title: String,
    status: String
  });
</script>