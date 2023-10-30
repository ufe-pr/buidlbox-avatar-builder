<script setup lang="ts">
import { ref } from 'vue'
import AttributeSelection from './components/AttributeSelection.vue'

const BASE_SPRITE_DIR = '/sprites/'

const body_sprites = [
  'body/blue.png',
  'body/purple.png',
  'body/body1.png',
  'body/body2.png',
  'body/body3.png',
  'body/zombie.png'
].map((v) => v && BASE_SPRITE_DIR + v)

const clothes_sprites = [
  'clothes/lumberjack.png',
  'clothes/blue_battle_suit.png',
  'clothes/green_battle_suit.png',
  'clothes/borg_suit_1.png',
  'clothes/dungarees.png',
  'clothes/toga.png',
  'clothes/tuxedo.png',
  'clothes/scientist.png',
  'clothes/vest_and_black_trousars.png',
  'clothes/prisonsuit.png',
  'clothes/hobbit_clothes.png'
].map((v) => v && BASE_SPRITE_DIR + v)

const ears_sprites = [
  'ears/two_diamonds.png',
  'ears/airpods.png',
  'ears/airpods-copy.png',
  'ears/one_gold_stud-copy.png',
  'ears/two_gold_studs.png',
  'ears/two_gold_stud_one_side.png',
  undefined
].map((v) => v && BASE_SPRITE_DIR + v)

const eyes_sprites = [
  'eyes/Borg_eyes1.png',
  'eyes/evil_red_and_black.png',
  'eyes/small_default.png',
  'eyes/all_blue_eyes.png',
  'eyes/glasses_3d.png',
  'eyes/small_eyeShadow_purple.png',
  'eyes/small_green.png',
  'eyes/sunglasses_black.png',
  'eyes/yellow_dot.png',
  'eyes/borg_cyclops.png',
  'eyes/borg_visor_1.png',
  'eyes/cyclops.png',
  'eyes/default.png',
  'eyes/old_man_eyes.png',
  'eyes/red_dot.png',
  'eyes/scar_over_eye.png',
  'eyes/skull_mask.png'
].map((v) => v && BASE_SPRITE_DIR + v)

const face_sprites = [
  'face/Borg_faceMask.png',
  'face/eye-patch.png',
  'face/green_bandana.png',
  'face/red_face_paint.png',
  undefined
].map((v) => v && BASE_SPRITE_DIR + v)

const head_sprites = [
  'head/black_bun.png',
  'head/ginger_hair_and_berad.png',
  'head/long_purple_hair.png',
  'head/black_hair_in_bun-copy.png',
  'head/gray_hair_in_bun.png',
  'head/mcdonalds_cap.png',
  'head/blue_battle_suit.png',
  'head/gray_hair_with_beard.png',
  'head/pink_mohawk.png',
  'head/pink_short_flowing_hair.png',
  'head/blue_quiff.png',
  'head/blue_spikey.png',
  'head/halo.png',
  'head/purple_spikey-copy.png',
  'head/purple_spikey.png',
  'head/borg_mask.png',
  'head/borwn_short.png',
  'head/brain_in_jar.png',
  'head/cap_1.png',
  'head/gas_mask.png',
  'head/hard_hat_torch.png',
  'head/headphones-blue-copy.png',
  'head/headphones-blue.png',
  'head/headphones.png',
  'head/karate_headband.png',
  'head/roman_helmet.png',
  'head/viking_helm.png',
  'head/yellow_short_flowing_hair.png'
].map((v) => v && BASE_SPRITE_DIR + v)

const face = ref(face_sprites[0])
const head = ref(head_sprites[0])
const body = ref(body_sprites[0])
const clothes = ref(clothes_sprites[0])
const ears = ref(ears_sprites[0])
const eyes = ref(eyes_sprites[0])

const layers = [
  { ref: body, name: 'Body', sprites: body_sprites },
  { ref: clothes, name: 'Clothes', sprites: clothes_sprites },
  { ref: ears, name: 'Ears', sprites: ears_sprites },
  { ref: face, name: 'Face', sprites: face_sprites },
  { ref: eyes, name: 'Eyes', sprites: eyes_sprites },
  { ref: head, name: 'Head', sprites: head_sprites }
]

function handleSubmit() {
  function extractFilename(x?: string) {
    if (!x) return x;
    const s = x.split(/\\|\//);
    return s[s.length - 1];
  }

  const body_ = extractFilename(body.value);
  const face_ = extractFilename(face.value);
  const head_ = extractFilename(head.value);
  const clothes_ = extractFilename(clothes.value);
  const ears_ = extractFilename(ears.value);
  const eyes_ = extractFilename(eyes.value);

  console.log(body_, face_, head_, clothes_, ears_, eyes_);
}
</script>

<template>
  <main>
    <div class="flex w-full max-w-5xl border-x-2">
      <div class="shrink-0 w-1/2 flex items-center justify-center">
        <div id="avatar-preview" class="relative">
          <img
            v-for="({ ref }, index) in layers.filter((x) => x.ref.value)"
            v-bind:key="index"
            class="absolute top-0 left-0 h-full w-full"
            v-bind:src="ref.value"
          />
        </div>
      </div>

      <div id="customization-panel" class="w-1/2 shrink-0 max-h-screen overflow-y-auto">
        <AttributeSelection
          v-for="layer in layers"
          :key="layer.name"
          v-model="layer.ref.value"
          :name="layer.name"
          :options="layer.sprites.map((x) => ({ name: x ? '' : 'None', sourceUrl: x }))"
        />
        <button @click="handleSubmit">Finish</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
#avatar-preview {
  --avatar-size: 8rem;
  width: var(--avatar-size);
  height: var(--avatar-size);
}
</style>
