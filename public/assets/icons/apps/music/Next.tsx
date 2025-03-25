import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNext = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M.25 3.23v12.54c0 2.079 1.801 3.392 3.266 2.383l6.859-5.017v1.85c0 1.82 1.65 2.969 2.994 2.085l8.345-5.486c1.382-.909 1.382-3.261 0-4.17L13.369 1.93c-1.343-.884-2.994.266-2.994 2.084v1.851L3.516.847C2.051-.163.25 1.15.25 3.23"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNext);
const Memo = memo(ForwardRef);
export default Memo;
