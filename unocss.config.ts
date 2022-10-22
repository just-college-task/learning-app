import presetWeapp from 'unocss-preset-weapp'
import { transformerClass, transformerAttributify } from 'unocss-preset-weapp/transformer'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
      taroWebpack: 'webpack5',
      designWidth: 750,
      deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
        375: 2 / 1
      }
    })
  ],
  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify({
      prefix: 'uno-',
      prefixedOnly: false
    }),

    transformerClass()
  ],
  rules: [
    [
      'text-big-title',
      {
        'font-size': '40rpx',
        'line-height': '72rpx'
      }
    ],
    [
      'text-description',
      {
        'font-size': '24rpx',
        'line-height': '36rpx'
      }
    ],
    [
      'text-small-title',
      {
        'font-size': '36rpx',
        'line-height': '56rpx'
      }
    ],
    [
      'text-normal',
      {
        'font-size': '32rpx',
        'line-height': '48rpx'
      }
    ]
  ]
})
