import React from 'react';
import { Layout } from '../components/Layout';
import { ExternalLink, BarChart2, Users, TrendingUp, Github, BookOpen, LineChart } from 'lucide-react';

interface RankingSource {
  name: string;
  url: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const rankingSources: RankingSource[] = [
  {
    name: 'TIOBE Index',
    url: 'https://www.tiobe.com/tiobe-index/',
    description: 'Based on search engine query volumes, updated monthly with historical data since 1986.',
    features: [
      'Search engine statistics',
      'Monthly updates',
      'Historical trends',
      'Industry standard metric'
    ],
    icon: <BarChart2 className="w-8 h-8 text-blue-500" />
  },
  {
    name: 'IEEE Spectrum',
    url: 'https://spectrum.ieee.org/top-programming-languages',
    description: 'Comprehensive analysis combining data from GitHub, Google, Stack Overflow, and more.',
    features: [
      'Multi-source analysis',
      'Category-specific rankings',
      'Industry focus',
      'Detailed methodology'
    ],
    icon: <LineChart className="w-8 h-8 text-green-500" />
  },
  {
    name: 'PYPL Index',
    url: 'https://pypl.github.io/PYPL.html',
    description: 'Analyzes programming language tutorial searches on Google Trends.',
    features: [
      'Real-time updates',
      'Learning demand focus',
      'Google Trends based',
      'Regional comparisons'
    ],
    icon: <TrendingUp className="w-8 h-8 text-red-500" />
  },
  {
    name: 'RedMonk Rankings',
    url: 'https://redmonk.com/sogrady/category/programming-languages/',
    description: 'Correlates GitHub usage and Stack Overflow discussions.',
    features: [
      'Developer-focused metrics',
      'Bi-annual updates',
      'Community engagement',
      'Trend analysis'
    ],
    icon: <Github className="w-8 h-8 text-purple-500" />
  },
  {
    name: 'GitHub Octoverse',
    url: 'https://octoverse.github.com/',
    description: 'Based on actual code repository data from the GitHub platform.',
    features: [
      'Repository statistics',
      'Annual reports',
      'Open source trends',
      'Developer activity'
    ],
    icon: <Github className="w-8 h-8 text-gray-500" />
  },
  {
    name: 'Stack Overflow Survey',
    url: 'https://survey.stackoverflow.co/2024',
    description: 'Annual developer survey covering popularity, salary, and satisfaction.',
    features: [
      'Developer feedback',
      'Comprehensive metrics',
      'Salary insights',
      'Technology trends'
    ],
    icon: <Users className="w-8 h-8 text-orange-500" />
  }
];

export function SourcesPage() {
  return (
    <Layout
      title="Ranking Sources"
      description="Explore various programming language popularity ranking sources and methodologies."
      keywords="programming language sources, TIOBE index, IEEE spectrum, PYPL, RedMonk, GitHub octoverse, Stack Overflow survey"
      canonical="/sources"
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Programming Language Ranking Sources
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Compare programming language popularity across different ranking systems and methodologies.
            Each source uses different metrics to evaluate language popularity and adoption.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rankingSources.map((source) => (
              <div key={source.name} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {source.icon}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {source.name}
                    </h3>
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {source.description}
                </p>

                <ul className="space-y-2">
                  {source.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}