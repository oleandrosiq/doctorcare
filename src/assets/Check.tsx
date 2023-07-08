import { SVGProps } from 'react'

export const CheckSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <circle cx={12} cy={12} r={12} fill="#DCE9E2" />
    <path
      stroke="#00856F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.091 8.182-7 7L6.909 12"
    />
  </svg>
)
