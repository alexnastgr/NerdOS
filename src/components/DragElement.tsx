import React, { useRef } from 'react'
import ReactDraggable from 'react-draggable'
import type { DraggableProps } from 'react-draggable'

type Props = {
  children: React.ReactNode
  handle?: string
  bounds?: DraggableProps['bounds']
  className?: string
}

export default function DragElement({
  children,
  handle = '.titlebar',
  className,
}: Props) {
  const nodeRef = useRef<HTMLDivElement | null>(null)

  return (
    <ReactDraggable
      nodeRef={nodeRef}
      handle={handle}
      cancel='.btnclose'
    >
      <div ref={nodeRef} className={className}>
        {children}
      </div>
    </ReactDraggable>
  )
}