export default function GlowPing() {
  return (
    <>
      <span className="relative flex size-2 md:size-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondery opacity-75"></span>
        <span className="relative inline-flex size-2 md:size-2.5 rounded-full bg-secondery"></span>
      </span>
    </>
  );
}
