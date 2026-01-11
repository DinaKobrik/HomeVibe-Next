interface StarIconProps {
  filled?: boolean;
  fillPercentage?: number;
}

export const StarIcon = ({
  filled = false,
  fillPercentage = 0,
}: StarIconProps) => {
  const effectiveFill = filled ? 100 : fillPercentage;

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 1.5L12.88 6.88L19 7.82L14.82 11.76L15.88 18L10 15.14L4.12 18L5.18 11.76L1 7.82L7.12 6.88L10 1.5Z"
        stroke="var(--primary)"
        strokeWidth="1.5"
        fill="none"
      />

      <g clipPath={`inset(0 ${100 - effectiveFill}% 0 0)`}>
        <path
          d="M10 1.5L12.88 6.88L19 7.82L14.82 11.76L15.88 18L10 15.14L4.12 18L5.18 11.76L1 7.82L7.12 6.88L10 1.5Z"
          fill="var(--primary)"
        />
      </g>
    </svg>
  );
};
