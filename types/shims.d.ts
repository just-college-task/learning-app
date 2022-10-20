import type { AttributifyNames } from '@unocss/preset-attributify'
type Prefix = 'uno-'

declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends Partial<Record<AttributifyNames<Prefix>, string>> {}
}
