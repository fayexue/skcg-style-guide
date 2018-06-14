import * as React from 'react';
import { Colors } from '../styles/Colors';

interface Props {
  readonly size?: number
  readonly fill?: Colors
}

export const AccordionIcon = (props: Props) => {
  return (
    <svg x="0px" y="0px"
      width={props.size || 18}
      height={props.size ? (props.size / 1.8).toFixed(0) : 10}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M-1-6h20v20H-1z" />
        <path fill={props.fill || '#06C'} d="M0 2.666L9.016 10 18 2.666V0L9 7.139 0 0z" />
      </g>
    </svg>
  )
}
