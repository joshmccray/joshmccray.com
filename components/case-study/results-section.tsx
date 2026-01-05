interface ResultsProps {
  results: {
    metrics?: Array<{
      label: string;
      value: string;
      description?: string;
    }>;
    impact?: string;
    status?: string;
  };
}

export function ResultsSection({ results }: ResultsProps) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-lg font-normal mb-6">Impact</h2>

      {/* Metrics grid */}
      {results.metrics && results.metrics.length > 0 && (
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {results.metrics.map((metric, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-normal text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="text-xs font-normal text-gray-900 mb-1">
                {metric.label}
              </div>
              {metric.description && (
                <div className="text-xs text-gray-600 font-light">
                  {metric.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {results.impact && (
        <p className="text-xs text-gray-700 mb-3 font-light">{results.impact}</p>
      )}

      {results.status && (
        <div className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-normal">
          {results.status}
        </div>
      )}
    </div>
  );
}
