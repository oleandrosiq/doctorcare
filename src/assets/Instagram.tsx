import { SVGProps } from 'react'

export const InstagramSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      stroke="#FFFAF1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"
    />
    <path
      stroke="#FFFAF1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37ZM17.5 6.5h.01"
    />
  </svg>
)
