import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={20}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.409 7.353a2.998 2.998 0 0 1 0 5.294L4.597 19.614C2.534 20.737 0 19.277 0 16.968V3.033C0 .723 2.534-.736 4.597.385z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlay);
const Memo = memo(ForwardRef);
export default Memo;
