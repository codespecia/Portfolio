import Image from "next/image";

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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 rounded-sm border-2 px-3 py-1 lg:text-sm lg:font-normal w-full lg:w-fit ${buttonclassName}`}
    >
      <p className={labelclassName}>{label}</p>
      {icon && <Image src={icon} alt={iconLabel} width={20} height={20} />}
    </a>
  );
}
