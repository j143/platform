'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import DeploymentCard from '@/components/DeploymentCard';
import { Deployment } from '@/lib/types';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

// Extended mock data for deployments
const mockDeployments: Deployment[] = [
  {
    id: '1',
    projectId: '1',
    status: 'deployed',
    commitHash: 'abc123def456',
    commitMessage: 'feat: add new dashboard components',
    branch: 'main',
    startedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    completedAt: new Date(Date.now() - 2 * 60 * 60 * 1000 + 45000),
    logs: [],
    url: 'https://frontend-app.platform.dev',
  },
  {
    id: '2',
    projectId: '2',
    status: 'building',
    commitHash: 'def456ghi789',
    commitMessage: 'fix: update API endpoints',
    branch: 'develop',
    startedAt: new Date(Date.now() - 10 * 60 * 1000),
    logs: [],
  },
  {
    id: '3',
    projectId: '3',
    status: 'failed',
    commitHash: 'ghi789jkl012',
    commitMessage: 'docs: update installation guide',
    branch: 'main',
    startedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    completedAt: new Date(Date.now() - 4 * 60 * 60 * 1000 + 120000),
    logs: [],
  },
  {
    id: '4',
    projectId: '4',
    status: 'deployed',
    commitHash: 'jkl012mno345',
    commitMessage: 'feat: implement GraphQL subscriptions',
    branch: 'main',
    startedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    completedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000 + 90000),
    logs: [],
    url: 'https://mobile-backend.platform.dev',
  },
  {
    id: '5',
    projectId: '1',
    status: 'deployed',
    commitHash: 'mno345pqr678',
    commitMessage: 'fix: resolve memory leak in component',
    branch: 'hotfix/memory-leak',
    startedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    completedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 + 55000),
    logs: [],
    url: 'https://frontend-app-pr-123.platform.dev',
  },
  {
    id: '6',
    projectId: '5',
    status: 'failed',
    commitHash: 'pqr678stu901',
    commitMessage: 'feat: add real-time data visualization',
    branch: 'feature/realtime-viz',
    startedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    completedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000 + 180000),
    logs: [],
  },
];

export default function DeploymentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredDeployments = mockDeployments.filter(deployment => {
    const matchesSearch = deployment.commitMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         deployment.branch.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         deployment.commitHash.includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || deployment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Deployments
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Track all your deployment history and status
            </p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                placeholder="Search deployments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <FunnelIcon className="h-5 w-5 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
            >
              <option value="all">All Status</option>
              <option value="deployed">Deployed</option>
              <option value="building">Building</option>
              <option value="failed">Failed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Deployments List */}
        <div className="space-y-4">
          {filteredDeployments.map((deployment) => (
            <DeploymentCard key={deployment.id} deployment={deployment} />
          ))}
        </div>

        {filteredDeployments.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto max-w-md">
              <div className="mx-auto h-12 w-12 text-gray-400">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No deployments found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchQuery ? 'Try adjusting your search terms.' : 'No deployments match the current filter.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}