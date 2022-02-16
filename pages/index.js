import { useRive } from "rive-react";

export default function Home() {
  const params = {
    src: "circle.riv",
    autoplay: true,
  };

  const { RiveComponent, rive } = useRive(params);

  return (
    <div>
      <RiveComponent
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  );
}
