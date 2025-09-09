<template>
  <SectionCard>  
    <template #header>
      {{ title }}
    </template>
    {{ when }}
    <template #footer>
      <div class="space-y-4">
        <p>{{ description }}</p>
        <section class="flex justify-end">
          <RoundButton @click="$emit('register')">
            Register
          </RoundButton>
        </section>
      </div>
    </template>
  </SectionCard>
</template>

<script setup>
  import SectionCard from '@/components/SectionCard.vue';
  import RoundButton from '@/components/RoundButton.vue';
  import RoundedCard from '@/components/RoundedCard.vue'; 

  defineProps({
    title: String,
    when: String,
    description: String
  });

  defineEmits(['register']);
</script>