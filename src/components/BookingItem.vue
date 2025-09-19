<template>
  <SectionCard>
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <span>{{ title }}</span>
        <span class="text-sm text-gray-500"><component :is="icon" :class="{ 'animate-spin': pending }" /></span>
      </div>
      <RoundButton variant="danger" @click="$emit('cancelled')">Cancel</RoundButton>
    </div>
  </SectionCard>
</template>

<script setup>
  import SectionCard from '@/components/SectionCard.vue';
  import RoundButton from '@/components/RoundButton.vue';
  import { LoaderCircle, Check } from 'lucide-vue-next';
  import { computed } from 'vue';

  defineEmits(['cancelled']);

  const props = defineProps({
    title: String,
    status: String
  });

  const pending = computed(() => props.status === 'pending');
  const icon = computed(() => pending.value ? LoaderCircle : Check);
</script>