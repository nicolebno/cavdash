// pages/index.tsx
export default function Home() {
  const metrics = [
    ["Employee Count", "100"],
    ["Lines of Coverage", "Medical, Dental, Vision"],
    ["Monthly Commissions", "$23k"],
    ["Renewal Date", "06/01/2025"],
    ["Waiting Period", "FOMF DOH"],
    ["COBRA Status", "Federal COBRA"],
  ];

  return (
    <div className="min-h-screen bg-white text-[#013366] font-sans p-6">
      <h1 className="text-3xl font-bold text-[#266B8E] mb-8">
        Client Summary Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map(([label, value], i) => (
          <div
            key={i}
            className="rounded-2xl bg-[#F2F2F2] border border-[#B7C4C0] shadow hover:scale-[1.02] transition transform p-5"
          >
            <h2 className="text-lg font-semibold text-[#266B8E]">{label}</h2>
            <p className="text-xl mt-2">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
