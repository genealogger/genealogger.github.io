const LOGS = [
  {
    title: "Week 1: Breaking Ground",
    href: "/devlog/week-1",
    date: "2026-04-23",
  },
  // Add new entries here every Thursday
];

export default function DevLogIndex() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">Engineering Logs</h1>
      <ul className="space-y-4">
        {LOGS.map((log) => (
          <li
            key={log.href}
            className="flex justify-between items-center border-b pb-4"
          >
            <a
              href={log.href}
              className="text-xl font-medium hover:text-indigo-600"
            >
              {log.title}
            </a>
            <span className="text-slate-400 font-mono text-sm">{log.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
