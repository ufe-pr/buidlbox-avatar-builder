<script setup lang="ts">
import type { Attribute } from '../types/Attribute'

defineProps<Attribute & { modelValue?: string }>()
defineEmits(['update:modelValue'])
</script>
<template>
  <div class="my-4 flex flex-col gap-4 xl:gap-6 min-h-[calc(100vh-15rem)]">
    <strong class="section-title">{{ name }}</strong>
    <div class="flex gap-4 xl:gap-8 flex-wrap">
      <span
        v-for="option in options"
        :key="option.sourceUrl"
        @click="$emit('update:modelValue', option.sourceUrl)"
        class="relative border border-transparent rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
        :class="{
          '!border-secondary shadow-2xl bg-surface': modelValue == option.sourceUrl,
          'bg-secondary-surface': modelValue != option.sourceUrl
        }"
      >
        <img
          v-if="option.sourceUrl"
          :src="option.sourceUrl"
          :alt="option.name"
          class="inline-block w-6 h-6 lg:w-8 lg:h-8"
        />
        <span v-else class="w-full h-full flex items-center justify-center cursor-default">
          {{ option.name }}
        </span>
      </span>
    </div>
  </div>
</template>
<style scoped></style>
