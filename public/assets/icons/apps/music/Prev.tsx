import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPrev = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={19}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M22.75 15.77V3.23c0-2.079-1.801-3.392-3.266-2.383l-6.859 5.018V4.012c0-1.818-1.65-2.968-2.994-2.084L1.287 7.415c-1.383.909-1.383 3.261 0 4.17L9.63 17.07c1.343.884 2.994-.266 2.994-2.084v-1.851l6.859 5.017c1.465 1.01 3.266-.304 3.266-2.383"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPrev);
const Memo = memo(ForwardRef);
export default Memo;
