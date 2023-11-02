<script setup lang="ts">
import { ref } from 'vue'
import AttributeSelection from './components/AttributeSelection.vue'
import { TabGroup, TabPanels, TabPanel, TabList, Tab } from '@headlessui/vue'
import BuidlButton from './components/BuidlButton.vue'
import { ButtonType } from './types/button'

const BASE_SPRITE_DIR = '/sprites256/'

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

const emit = defineEmits<{
  (event: 'built', data: object): void
}>()

function handleSubmit() {
  function extractFilename(x?: string) {
    if (!x) return x
    const s = x.split(/\\|\//)
    return s[s.length - 1]
  }
  const data = {
    body: extractFilename(body.value),
    face: extractFilename(face.value),
    head: extractFilename(head.value),
    clothes: extractFilename(clothes.value),
    ears: extractFilename(ears.value),
    eyes: extractFilename(eyes.value)
  }

  console.log('Output data:', data)
  emit('built', data)
  alert(JSON.stringify(data))
}

const selectedIndex = ref(0)
</script>

<template>
  <main class="overflow-x-hidden relative">
    <div
      class="flex flex-wrap lg:flex-nowrap gap-4 xl:gap-8 px-4 w-full max-w-7xl mx-auto min-h-screen relative"
    >
      <div class="shrink-0 w-full lg:max-w-xs flex flex-col gap-4 items-center lg:mt-16 p-4 lg:p-8">
        <div id="avatar-preview" class="relative rounded-full bg-surface p-4 h-20 w-20">
          <img
            v-for="({ ref }, index) in layers.filter((x) => x.ref.value)"
            v-bind:key="index"
            class="absolute top-0 left-0 h-full w-full"
            v-bind:src="ref.value"
          />
        </div>
        <div>Preview avatar</div>
      </div>

      <div id="customization-panel" class="flex-grow overflow-x-hidden my-8 lg:my-16">
        <div class="card">
          <TabGroup :selected-index="selectedIndex" @change="(index) => (selectedIndex = index)">
            <TabList class="flex overflow-x-auto gap-4 mb-12">
              <Tab
                v-slot="{ selected }"
                class="relative outline-none box-content hover:text-sm px-8 py-2.5 mb-1.5 transition duration-200 w-full block hover:no-underline text-on-surface-secondary hover:font-medium hover:text-on-surface hover:border-b-2 border-b-[1px] ui-selected:border-secondary border-transparent hover:border-secondary whitespace-nowrap"
                v-for="{ name } in layers"
                :key="name"
              >
                <span
                  class=""
                  :class="{ 'bg-full-gradient text-transparent bg-clip-text': selected }"
                >
                  {{ name }}
                </span>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel v-for="layer in layers" :key="layer.name">
                <AttributeSelection
                  v-model="layer.ref.value"
                  :name="layer.name"
                  :options="layer.sprites.map((x) => ({ name: x ? '' : 'None', sourceUrl: x }))"
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
          <div class="flex flex-wrap gap-4">
            <BuidlButton
              class="w-full md:w-fit"
              v-if="selectedIndex > 0"
              @click="selectedIndex--"
              :button-type="ButtonType.Secondary2"
              >← {{ layers[selectedIndex - 1].name }}</BuidlButton
            >
            <span class="flex-grow"></span>
            <BuidlButton
              class="w-full md:w-fit"
              v-if="selectedIndex < layers.length - 1"
              @click="selectedIndex++"
              :button-type="ButtonType.Positive"
              >{{ layers[selectedIndex + 1].name }} →</BuidlButton
            >
            <BuidlButton
              class="w-full md:w-fit"
              v-else
              @click="handleSubmit"
              :button-type="ButtonType.Positive"
              >Finish</BuidlButton
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
