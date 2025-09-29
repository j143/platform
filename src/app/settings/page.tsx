'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    deploymentSuccess: true,
    deploymentFailed: true,
    buildStarted: false,
    weeklyReport: true,
  });

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
            Settings
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your account and notification preferences
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Notifications */}
          <div className="bg-white shadow-sm rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Deployment Success</p>
                    <p className="text-sm text-gray-500">Get notified when deployments complete successfully</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNotificationChange('deploymentSuccess')}
                    className={`${
                      notifications.deploymentSuccess ? 'bg-purple-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        notifications.deploymentSuccess ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Deployment Failed</p>
                    <p className="text-sm text-gray-500">Get notified when deployments fail</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNotificationChange('deploymentFailed')}
                    className={`${
                      notifications.deploymentFailed ? 'bg-purple-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        notifications.deploymentFailed ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Build Started</p>
                    <p className="text-sm text-gray-500">Get notified when builds start</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNotificationChange('buildStarted')}
                    className={`${
                      notifications.buildStarted ? 'bg-purple-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        notifications.buildStarted ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Weekly Report</p>
                    <p className="text-sm text-gray-500">Receive weekly deployment summary reports</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNotificationChange('weeklyReport')}
                    className={`${
                      notifications.weeklyReport ? 'bg-purple-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        notifications.weeklyReport ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* API Keys */}
          <div className="bg-white shadow-sm rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">API Keys</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Personal Access Token
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="password"
                      value="••••••••••••••••••••••••••••••••"
                      readOnly
                      className="block w-full rounded-l-md border-gray-300 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                    />
                    <button
                      type="button"
                      className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    >
                      Regenerate
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Use this token to access the Platform API programmatically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white shadow-sm rounded-lg border-2 border-red-200">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-red-900 mb-4">Danger Zone</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Delete Account</p>
                    <p className="text-sm text-gray-500">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}