import * as React from 'react'
import { Svg } from './styles'

export function Loading (props) {
  return (
    <Svg
      style={{
        margin: 'auto',
        background: 'transparent'
      }}
      width={70}
      height={70}
      viewBox='0 0 10 100'
      preserveAspectRatio='xMidYMid'
      display='block'

      {...props}
    >
      <circle
        cx={50}
        cy={50}
        fill='none'
        stroke='#facd9e'
        strokeWidth={10}
        r={35}
        strokeDasharray='164.93361431346415 56.97787143782138'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1s'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
        />
      </circle>
    </Svg>
  )
}
