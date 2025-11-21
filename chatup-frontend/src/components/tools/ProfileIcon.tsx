interface profileType {
  className?: string;
  classNamediv?: string;
  profile?: string | undefined;
}

export default function ProfileIcon({
  className,
  profile = "./profile.png",
  classNamediv,
}: profileType) {
  return (
    <div className={`${classNamediv}`}>
      <img
        src={profile}
        className={`rounded-full h-12 w-12   object-contain  ${className}`}
        alt=""
      />
    </div>
  );
}
