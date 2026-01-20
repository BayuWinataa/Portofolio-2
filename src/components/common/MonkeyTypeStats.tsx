'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface MonkeyTypeStats {
  wpm: number
  accuracy: number
  testsCompleted: number
  timeTyping: number
}

interface ActivityData {
  date: string
  count: number
}

export function MonkeyTypeStats() {
  const { theme } = useTheme()
  const [stats, setStats] = useState<MonkeyTypeStats | null>(null)
  const [activityData, setActivityData] = useState<ActivityData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Replace with your actual MonkeyType username
  const username = `bayuuuu`

  // Generate dummy activity data for the last 12 months
  const generateActivityData = () => {
    const data: ActivityData[] = []
    const today = new Date()
    const daysToGenerate = 365

    for (let i = daysToGenerate; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)

      // Random activity count (0-10 tests per day)
      const count = Math.random() > 0.3 ? Math.floor(Math.random() * 10) : 0

      data.push({
        date: date.toISOString().split('T')[0],
        count: count,
      })
    }
    return data
  }

  // Get activity level for color intensity
  const getActivityLevel = (count: number) => {
    if (count === 0) return 0
    if (count <= 2) return 1
    if (count <= 5) return 2
    if (count <= 8) return 3
    return 4
  }

  // Get color class based on activity level
  const getColorClass = (level: number) => {
    const colors = {
      light: [
        'bg-gray-100',
        'bg-orange-200',
        'bg-orange-300',
        'bg-orange-400',
        'bg-orange-500',
      ],
      dark: [
        'bg-gray-800',
        'bg-orange-900',
        'bg-orange-700',
        'bg-orange-600',
        'bg-orange-500',
      ],
    }
    return theme === 'dark' ? colors.dark[level] : colors.light[level]
  }

  useEffect(() => {
    // Fetch stats from MonkeyType API
    const fetchStats = async () => {
      try {
        const response = await fetch(
          `https://api.monkeytype.com/users/${username}/profile`,
        )

        if (!response.ok) {
          throw new Error('Failed to fetch stats')
        }

        const data = await response.json()

        // Extract relevant stats from the API response
        setStats({
          wpm: data.data.personalBests?.time?.[60]?.[0]?.wpm || 0,
          accuracy: data.data.personalBests?.time?.[60]?.[0]?.acc || 0,
          testsCompleted: data.data.typingStats?.completedTests || 0,
          timeTyping: data.data.typingStats?.timeTyping || 0,
        })
        setLoading(false)
      } catch (err) {
        console.error('Error fetching MonkeyType stats:', err)
        setError(true)
        setLoading(false)
        // Set dummy data for display purposes
        setStats({
          wpm: 85,
          accuracy: 96.5,
          testsCompleted: 150,
          timeTyping: 7200,
        })
      }
    }

    fetchStats()
    // Generate activity data
    setActivityData(generateActivityData())
  }, [username])

  if (loading) {
    return (
      <div className="flex h-48 items-center justify-center rounded-lg border-4 border-black-primary bg-white p-4 shadow-image-card dark:bg-black">
        <div className="animate-pulse text-lg font-semibold text-gray-500 dark:text-gray-400">
          Loading stats...
        </div>
      </div>
    )
  }

  if (error || !stats) {
    return (
      <div className="flex h-48 items-center justify-center rounded-lg border-4 border-black-primary bg-white p-4 shadow-image-card dark:bg-black">
        <div className="text-center">
          <p className="text-lg font-semibold text-red-500">
            Failed to load stats
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Please check your username or try again later
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="cursor-pointer rounded-lg border-4 border-black-primary bg-white p-4 shadow-image-card duration-150 hover:shadow-button-card hover:shadow-black-primary dark:bg-black">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xl">⌨️</span>
        <span className="text-base font-semibold text-black-primary dark:text-white">
          MonkeyType Stats
        </span>
      </div>

      {/* Activity Heatmap */}
      <div className="mb-4 overflow-x-auto">
        <div className="mb-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>last 12 months</span>
          <span>{stats.testsCompleted} tests</span>
        </div>
        <div className="relative">
          <div className="flex gap-[3px]">
            {/* Group by weeks */}
            {Array.from({ length: 53 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const dataIndex = weekIndex * 7 + dayIndex
                  const activity = activityData[dataIndex]
                  const level = activity ? getActivityLevel(activity.count) : 0

                  return (
                    <div
                      key={dayIndex}
                      className={`h-[10px] w-[10px] rounded-sm ${getColorClass(
                        level,
                      )}`}
                      title={
                        activity
                          ? `${activity.date}: ${activity.count} tests`
                          : ''
                      }
                    />
                  )
                })}
              </div>
            ))}
          </div>
          {/* Month labels */}
          <div className="mt-1 flex justify-between text-[10px] text-gray-500 dark:text-gray-400">
            <span>feb</span>
            <span>mar</span>
            <span>apr</span>
            <span>may</span>
            <span>jun</span>
            <span>jul</span>
            <span>aug</span>
            <span>sep</span>
            <span>oct</span>
            <span>nov</span>
            <span>dec</span>
            <span>jan</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-gray-500 dark:text-gray-400">
          <span>less</span>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`h-[10px] w-[10px] rounded-sm ${getColorClass(i)}`}
            />
          ))}
          <span>more</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="flex flex-col items-center justify-center rounded-md bg-gray-50 p-3 dark:bg-gray-900">
          <div className="text-2xl font-bold text-orange-primary">
            {stats.wpm}
          </div>
          <div className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">
            WPM
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-md bg-gray-50 p-3 dark:bg-gray-900">
          <div className="text-2xl font-bold text-orange-primary">
            {stats.accuracy.toFixed(1)}%
          </div>
          <div className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">
            Accuracy
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-md bg-gray-50 p-3 dark:bg-gray-900">
          <div className="text-2xl font-bold text-orange-primary">
            {stats.testsCompleted}
          </div>
          <div className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">
            Tests
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-md bg-gray-50 p-3 dark:bg-gray-900">
          <div className="text-2xl font-bold text-orange-primary">
            {Math.round(stats.timeTyping / 3600)}h
          </div>
          <div className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">
            Time Typing
          </div>
        </div>
      </div>

      <a
        href={`https://monkeytype.com/profile/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex items-center justify-center gap-1 text-xs font-medium text-orange-primary hover:underline"
      >
        View profile →
      </a>
    </div>
  )
}
