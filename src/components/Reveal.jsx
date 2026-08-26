import { useReveal } from "../hooks/useReveal.js";

export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  scale = false,
  children,
  ...rest
}) {
  const ref = useReveal();

  return (
    <Tag
      ref={ref}
      className={`${scale ? "reveal-scale" : "reveal"} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
