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
    <div className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-8">Impact</h2>

      {/* Metrics grid */}
      {results.metrics && results.metrics.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {results.metrics.map((metric, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">
                {metric.label}
              </div>
              {metric.description && (
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {results.impact && (
        <p className="text-gray-700 mb-4">{results.impact}</p>
      )}

      {results.status && (
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          {results.status}
        </div>
      )}
    </div>
  );
}
