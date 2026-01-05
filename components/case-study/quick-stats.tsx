interface QuickStatsProps {
  stats: {
    company: string;
    role: string;
    timeline?: string;
    team?: string;
    problem: string;
    solution: string;
  };
  liveUrl?: string;
}

export function QuickStats({ stats, liveUrl }: QuickStatsProps) {
  return (
    <div className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
      {/* Meta info grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pb-4 border-b border-gray-200 text-sm">
        <div>
          <div className="text-gray-500 font-medium">Company</div>
          <div className="text-gray-900">{stats.company}</div>
        </div>
        <div>
          <div className="text-gray-500 font-medium">Role</div>
          <div className="text-gray-900">{stats.role}</div>
        </div>
        {stats.timeline && (
          <div>
            <div className="text-gray-500 font-medium">Timeline</div>
            <div className="text-gray-900">{stats.timeline}</div>
          </div>
        )}
        {stats.team && (
          <div>
            <div className="text-gray-500 font-medium">Team</div>
            <div className="text-gray-900">{stats.team}</div>
          </div>
        )}
      </div>

      {/* Problem & Solution */}
      <div className="space-y-3 text-sm">
        <div>
          <div className="text-gray-500 font-medium mb-1">Problem</div>
          <div className="text-gray-900">{stats.problem}</div>
        </div>
        <div>
          <div className="text-gray-500 font-medium mb-1">Solution</div>
          <div className="text-gray-900">{stats.solution}</div>
        </div>
      </div>

      {/* Live URL */}
      {liveUrl && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
          >
            View Live Project →
          </a>
        </div>
      )}
    </div>
  );
}
