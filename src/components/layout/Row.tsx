import * as React from 'react'
import glamorous, { Div } from 'glamorous';

export const Row = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  margin: '-1rem'
})

type ColWidth = 3 | 4 | 6 | 8 | 9 | 12;

export const Column = (props: { colWidth?: ColWidth } & React.HTMLProps<HTMLDivElement>) => {
  const { colWidth, children, ...otherProps } = props
  return (
    <Div flex={colWidth || 1} padding="1rem">
      <div {...otherProps}>
        {children}
      </div>
    </Div>
  )
}