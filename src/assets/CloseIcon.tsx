import * as React from 'react';
import { Colors } from '../styles/Colors';

interface Props {
  readonly size?: number
  readonly fill?: Colors
}

export const CloseIcon = (props: Props) => {
  return (
    <svg x="0px" y="0px"
      width={props.size || 24}
      height={props.size || 24}
      fill={props.fill || '#000'}
    >
      <g id="Bounding_Boxes">
        <path fill="none" d="M0,0h24v24H0V0z" />
      </g>
      <g id="Outline_1_">
        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41z" />
      </g>
    </svg>
  )
}
