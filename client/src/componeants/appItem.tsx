type AppItemProps = {
  name: string;
  description: string;
  status?: "recommended" | "added" | "default";
};

export function AppItem({ name, description, status = "default" }: AppItemProps) {
  const statusStyles = {
    recommended: "text-orange-500 bg-orange-100 px-2 py-1 rounded-full text-xs font-medium",
    added: "text-gray-400 text-sm",
    default: "px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600",
  };

  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
          {status === "added" && <span className="text-green-500">✔</span>}
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {status === "recommended" && <span className={statusStyles.recommended}>Recommended 🔥</span>}
      {status === "added" && <button className={statusStyles.added} disabled>Added</button>}
      {status === "default" && <button className={statusStyles.default}>Add</button>}
    </div>
  );
}
