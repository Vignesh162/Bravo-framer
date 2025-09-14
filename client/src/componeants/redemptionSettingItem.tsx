type RedemptionSettingItemProps = {
  label: string;
  description?: string;
  type?: "number" | "currency" | "slider";
  value: number | string;
  onChange?: (val: number | string) => void;
};

export function RedemptionSettingItem({
  label,
  description,
  type = "number",
  value,
  onChange,
}: RedemptionSettingItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {type === "slider" ? (
        <input
          type="range"
          min={0}
          max={100}
          value={value as number}
          onChange={(e) => onChange?.(Number(e.target.value))}
          className="w-full"
        />
      ) : (
        <input
          type="number"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="border px-3 py-2 rounded-lg text-sm"
        />
      )}
      {description && <p className="text-xs text-gray-500">{description}</p>}
    </div>
  );
}
