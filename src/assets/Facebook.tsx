import { SVGProps } from 'react'

export const FacebookSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      stroke="#FFFAF1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"
    />
  </svg>
)
