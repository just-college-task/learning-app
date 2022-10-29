import { UseQueryReturnType } from 'vue-query'
import { h, renderSlot, computed, VNode, defineComponent } from 'vue'
import { WithPage } from 'types/api'
import { Empty } from '@nutui/nutui-taro'

interface Props<T> {
  query: T
}

export default function useListQueryContainer<
  T extends UseQueryReturnType<WithPage<unknown>, unknown>
>(query: T) {
  const wrapper = defineComponent((props: Props<T>, { slots }) => {
    return () => {
      const { data } = query
      const isEmpty = computed(() => data.value && data.value.dataList.length === 0)

      return h(
        'view',
        props,
        isEmpty.value
          ? h(Empty)
          : renderSlot(slots, 'default', {
              list: data.value?.dataList
            })
      )
    }
  })

  return wrapper as typeof wrapper & {
    new (): {
      $slots: {
        default: (arg: { list: NonNullable<T['data']['value']>['dataList'] }) => VNode[]
      }
    }
  }
}
