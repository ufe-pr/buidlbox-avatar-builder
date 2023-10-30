export type AttributeOption = {
  name: string
  sourceUrl: string | undefined
}

export type Attribute = {
  name: string
  options: AttributeOption[]
}
