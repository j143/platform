'use client';

import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import DeploymentCard from '@/components/DeploymentCard';
import { Project, Deployment } from '@/lib/types';
import { PlusIcon } from '@heroicons/react/24/outline';

// Mock data for demonstration
const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Frontend App',
    description: 'React dashboard application',
    repository: 'github.com/user/frontend-app',
    status: 'active',
    lastDeployment: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    environment: 'production',
    userId: 'user1',
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: '2',
    name: 'API Service',
    description: 'Node.js REST API',
    repository: 'github.com/user/api-service',
    status: 'building',
    environment: 'staging',
    userId: 'user1',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    updatedAt: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
  },
  {
    id: '3',
    name: 'Documentation',
    description: 'Project documentation site',
    repository: 'github.com/user/docs',
    status: 'failed',
    lastDeployment: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    environment: 'production',
    userId: 'user1',
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
    updatedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },
];

const mockDeployments: Deployment[] = [
  {
    id: '1',
    projectId: '1',
    status: 'deployed',
    commitHash: 'abc123def456',
    commitMessage: 'feat: add new dashboard components',
    branch: 'main',
    startedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    completedAt: new Date(Date.now() - 2 * 60 * 60 * 1000 + 45000), // +45 seconds
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
    startedAt: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
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
    completedAt: new Date(Date.now() - 4 * 60 * 60 * 1000 + 120000), // +2 minutes
    logs: [],
  },
];

export default function Dashboard() {
  const handleViewDetails = (project: Project) => {
    // In a real app, this would navigate to a project details page
    console.log('Viewing project:', project);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Dashboard
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Overview of your projects and recent deployments
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              New Project
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Projects</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {mockProjects.filter(p => p.status === 'active').length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow-sm rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Building</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {mockProjects.filter(p => p.status === 'building').length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow-sm rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Deployments</dt>
                    <dd className="text-lg font-medium text-gray-900">{mockDeployments.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow-sm rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Failed</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {mockProjects.filter(p => p.status === 'failed').length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Recent Projects</h3>
            <a href="/projects" className="text-sm text-purple-600 hover:text-purple-500">
              View all →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {mockProjects.slice(0, 4).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>

        {/* Deployments Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Recent Deployments</h3>
            <a href="/deployments" className="text-sm text-purple-600 hover:text-purple-500">
              View all →
            </a>
          </div>
          <div className="space-y-4">
            {mockDeployments.map((deployment) => (
              <DeploymentCard key={deployment.id} deployment={deployment} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
