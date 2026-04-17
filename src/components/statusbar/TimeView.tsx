import useTime from "@/hooks/useTime";

export default function TimeView() {
  const { localTime } = useTime();

  return (
    <div className="timeview">
      <div className="text-3xl">{localTime}</div>
    </div>
  );
}
