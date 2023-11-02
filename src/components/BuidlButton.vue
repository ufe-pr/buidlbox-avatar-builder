<script setup lang="ts">
import { computed } from 'vue'
import { ButtonSize, ButtonType } from '../types/button'
const props = withDefaults(
  defineProps<{
    buttonType?: ButtonType
    title?: string
    size?: ButtonSize
    transform?: boolean
    disabled?: boolean
    newTab?: boolean
  }>(),
  {
    buttonType: ButtonType.Primary1,
    size: ButtonSize.Medium,
    transform: false
  }
)

const classes = computed(() => {
  return {
    'bg-light-blue text-dark-blue': props.buttonType == ButtonType.Primary2,
    'hover:bg-mid-blue': props.buttonType == ButtonType.Primary2 && !props.disabled,

    'bg-transparent text-dark-blue': props.buttonType == ButtonType.Primary1,
    'hover:bg-light-cream': props.buttonType == ButtonType.Primary1 && !props.disabled,

    'border border-mid-blue text-light-cream': props.buttonType == ButtonType.Secondary2,
    'hover:border-light-blue': props.buttonType == ButtonType.Secondary2 && !props.disabled,

    'bg-transparent border-transparent border  text-light-cream':
      props.buttonType == ButtonType.Secondary1,
    'hover:border-light-cream hover:bg-inherit':
      props.buttonType == ButtonType.Secondary1 && !props.disabled,

    'bg-transparent text-secondary border-2 border-secondary':
      props.buttonType == ButtonType.Secondary3,
    'hover:bg-secondary hover:text-surface':
      props.buttonType == ButtonType.Secondary3 && !props.disabled,

    'opacity-50': props.disabled,
    'bg-primary text-white ': props.buttonType == ButtonType.Primary3,
    'bg-gradient-to-r from-primary to-secondary text-white':
      props.buttonType == ButtonType.Gradient,
    'bg-positive text-background hover:opacity-80': props.buttonType == ButtonType.Positive,
    'bg-destructive text-white hover:opacity-80 ': props.buttonType == ButtonType.Desctructive,
    'text-destructive-secondary hover:opacity-80': props.buttonType == ButtonType.Destructive2,
    'bg-tentative text-white ': props.buttonType == ButtonType.Tentative,
    'relative inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold':
      props.size == ButtonSize.XSmall,
    'sm:py-2 sm:px-3 sm:text-sm py-1 px-2 text-xs font-semibold': props.size == ButtonSize.Small,

    'py-2.5 px-4 text-sm': props.size == ButtonSize.Medium,

    'py-3.5 px-4.5 text-sm': props.size == ButtonSize.Large,

    'py-4.5 px-5.5 text-sm': props.size == ButtonSize.XLarge
  }
})
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="{
      'cursor-not-allowed': disabled
    }"
    class="inter font-bold flex item-center justify-center rounded-3xl relative"
    @click="$emit('clicked')"
  >
    <div :class="classes" class="w-full z-[2] rounded-3xl h-full transition-all duration-300">
      <div class="transition-all duration-300 flex items-center justify-center" v-if="title">
        {{ title }}
      </div>
      <div v-else>
        <slot></slot>
      </div>
    </div>
    <div
      v-if="
        (props.buttonType == ButtonType.Primary1 ||
          props.buttonType == ButtonType.Secondary1 ||
          props.transform) &&
        !disabled
      "
      :class="{
        'p-[1px]': props.buttonType == ButtonType.Secondary1
      }"
      class="bg-gradient-to-r from-mid-green to-light-cream w-full h-full absolute rounded-3xl flex items-center justify-center child:w-full child:h-full"
    >
      <div
        v-if="props.buttonType == ButtonType.Secondary1"
        class="w-full h-full bg-background rounded-3xl"
      ></div>
    </div>
  </button>
</template>
