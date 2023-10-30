<script setup lang="ts">
import type { Attribute } from '../types/Attribute'

defineProps<Attribute & { modelValue?: string }>()
defineEmits(['update:modelValue'])
</script>
<template>
  <div class="mt-4 mb-4">
    <strong class="text-lg">{{ name }}</strong>
    <div class="flex gap-2 flex-wrap">
      <span
        v-for="option in options"
        :key="option.sourceUrl"
        @click="$emit('update:modelValue', option.sourceUrl)"
        class="h-20 w-20 border-2 rounded"
        :class="modelValue == option.sourceUrl ? 'border-blue-600' : ''"
      >
        <img v-if="option.sourceUrl" :src="option.sourceUrl" :alt="option.name" class="inline-block w-full h-full" />
        <span v-else class="w-full h-full flex items-center justify-center cursor-default">
          {{ option.name }}
        </span>
      </span>
    </div>
  </div>
</template>
<style scoped></style>
