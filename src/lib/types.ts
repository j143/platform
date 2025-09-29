export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  repository: string;
  status: 'active' | 'inactive' | 'building' | 'failed';
  lastDeployment?: Date;
  environment: 'production' | 'staging' | 'preview';
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Deployment {
  id: string;
  projectId: string;
  status: 'building' | 'deployed' | 'failed' | 'pending';
  commitHash: string;
  commitMessage: string;
  branch: string;
  startedAt: Date;
  completedAt?: Date;
  logs: string[];
  url?: string;
}

export interface Environment {
  id: string;
  projectId: string;
  key: string;
  value: string;
  isSecret: boolean;
  createdAt: Date;
}