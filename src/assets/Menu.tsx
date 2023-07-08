import { SVGProps } from 'react'

export const MenuSVG = ({
  color = '#FFFAF1',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20h20M10 12h20M18 28h12"
    />
  </svg>
)
