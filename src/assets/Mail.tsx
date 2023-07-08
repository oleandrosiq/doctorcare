import { SVGProps } from 'react'

export const MailSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      stroke="#00856F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
    />
    <path
      stroke="#00856F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m22 6-10 7L2 6"
    />
  </svg>
)
