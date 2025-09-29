'use client';

import { Project } from '@/lib/types';
import { getStatusColor, formatDate } from '@/lib/utils';
import { CalendarIcon, LinkIcon } from '@heroicons/react/24/outline';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {project.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.description || 'No description'}</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex items-center text-sm text-gray-500">
            <LinkIcon className="flex-shrink-0 mr-1.5 h-4 w-4" />
            <span className="truncate">{project.repository}</span>
          </div>
          {project.lastDeployment && (
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <CalendarIcon className="flex-shrink-0 mr-1.5 h-4 w-4" />
              <span>Last deployed {formatDate(project.lastDeployment)}</span>
            </div>
          )}
        </div>
        
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => onViewDetails(project)}
            className="text-purple-600 hover:text-purple-500 text-sm font-medium"
          >
            View details →
          </button>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
              Settings
            </button>
            <button className="px-3 py-1 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700">
              Deploy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}