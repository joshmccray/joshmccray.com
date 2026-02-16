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
    <div className="mb-12">
      {/* Meta info row */}
      <div className="flex flex-wrap gap-x-8 gap-y-2 mb-8 pb-6 border-b border-[var(--border)] text-xs">
        <div>
          <span className="text-gray-400 uppercase tracking-wider">Company</span>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-700">{stats.company}</span>
        </div>
        <div>
          <span className="text-gray-400 uppercase tracking-wider">Role</span>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-700">{stats.role}</span>
        </div>
        {stats.timeline && (
          <div>
            <span className="text-gray-400 uppercase tracking-wider">Timeline</span>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-700">{stats.timeline}</span>
          </div>
        )}
        {stats.team && (
          <div>
            <span className="text-gray-400 uppercase tracking-wider">Team</span>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-700">{stats.team}</span>
          </div>
        )}
      </div>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Problem</p>
          <p className="text-sm text-gray-700 leading-relaxed font-light">{stats.problem}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Solution</p>
          <p className="text-sm text-gray-700 leading-relaxed font-light">{stats.solution}</p>
        </div>
      </div>

      {/* Live URL */}
      {liveUrl && (
        <div className="mt-8 pt-6 border-t border-[var(--border)]">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[var(--accent)] transition-colors font-normal"
          >
            View Live Project
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
