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
    <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
      {/* Meta info grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 pb-3 border-b border-gray-200 text-xs">
        <div>
          <div className="text-gray-500 font-normal">Company</div>
          <div className="text-gray-900 font-light">{stats.company}</div>
        </div>
        <div>
          <div className="text-gray-500 font-normal">Role</div>
          <div className="text-gray-900 font-light">{stats.role}</div>
        </div>
        {stats.timeline && (
          <div>
            <div className="text-gray-500 font-normal">Timeline</div>
            <div className="text-gray-900 font-light">{stats.timeline}</div>
          </div>
        )}
        {stats.team && (
          <div>
            <div className="text-gray-500 font-normal">Team</div>
            <div className="text-gray-900 font-light">{stats.team}</div>
          </div>
        )}
      </div>

      {/* Problem & Solution */}
      <div className="space-y-2 text-xs">
        <div>
          <div className="text-gray-500 font-normal mb-1">Problem</div>
          <div className="text-gray-900 font-light">{stats.problem}</div>
        </div>
        <div>
          <div className="text-gray-500 font-normal mb-1">Solution</div>
          <div className="text-gray-900 font-light">{stats.solution}</div>
        </div>
      </div>

      {/* Live URL */}
      {liveUrl && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs bg-black text-white px-3 py-2 rounded hover:bg-gray-800 transition-colors font-normal"
          >
            View Live Project →
          </a>
        </div>
      )}
    </div>
  );
}
