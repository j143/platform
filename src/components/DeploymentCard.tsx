'use client';

import { Deployment } from '@/lib/types';
import { getStatusColor, formatDate } from '@/lib/utils';
import { ClockIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface DeploymentCardProps {
  deployment: Deployment;
}

export default function DeploymentCard({ deployment }: DeploymentCardProps) {
  const duration = deployment.completedAt 
    ? Math.round((deployment.completedAt.getTime() - deployment.startedAt.getTime()) / 1000)
    : null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(deployment.status)}`}>
              {deployment.status}
            </span>
            <span className="text-sm text-gray-500">#{deployment.commitHash.substring(0, 7)}</span>
          </div>
          
          <h4 className="mt-2 text-sm font-medium text-gray-900 truncate">
            {deployment.commitMessage}
          </h4>
          
          <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center">
              <CodeBracketIcon className="h-4 w-4 mr-1" />
              <span>{deployment.branch}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" />
              <span>{formatDate(deployment.startedAt)}</span>
            </div>
            {duration && (
              <span>{duration}s</span>
            )}
          </div>
        </div>
        
        {deployment.url && (
          <div className="ml-4">
            <a
              href={deployment.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-500 text-sm font-medium"
            >
              View →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}