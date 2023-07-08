import { SVGProps } from 'react'

export const CloseSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      stroke="#FFFAF1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M30 10 10 30m0-20 20 20"
    />
  </svg>
)
