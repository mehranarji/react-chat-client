import { FC } from "react";

interface AnimatingDotsProps {}

const AnimatingDots: FC<AnimatingDotsProps> = props => {
  return <>
    <span className="inline-block animate-pulse">.</span>
    <span className="inline-block animate-pulse animation-delay-500">.</span>
    <span className="inline-block animate-pulse animation-delay-1000">.</span>
  </>;
};

export default AnimatingDots;
