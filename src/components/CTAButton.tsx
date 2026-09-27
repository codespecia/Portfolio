interface CTAButtonProps {
  href?: string;
  icon: string;
  iconLabel: string;
  label: string;
  labelclassName?: string;
  buttonclassName?: string;
}

export default function CTAButton({
  href,
  icon,
  iconLabel,
  label,
  labelclassName = "",
  buttonclassName = "",
}: CTAButtonProps) {
  return (
    <>
      <a
        href={href}
        target="_blank"
        className={`flex gap-2 items-center lg:font-normal lg:text-sm px-3 py-1 rounded-sm border-2 ${buttonclassName}`}
      >
        <p className={labelclassName}>{label}</p>
        {icon && <img src={icon} alt={iconLabel} />}
      </a>
    </>
  );
}
