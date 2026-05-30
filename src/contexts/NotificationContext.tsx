'use client'
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { markNotificationReadAction } from '@/app/actions/notifications'

export interface AppNotification {
  id: string
  title: string
  body: string
  link?: string
  read: boolean
  createdAt: Date
}

interface NotificationContextValue {
  notifications: AppNotification[]
  unreadCount: number
  markRead: (id: string) => void
}

const NotificationContext = createContext<NotificationContextValue>({
  notifications: [],
  unreadCount: 0,
  markRead: () => {},
})

export function NotificationProvider({
  children,
  initialNotifications,
}: {
  children: ReactNode
  initialNotifications: AppNotification[]
}) {
  const [notifications, setNotifications] = useState<AppNotification[]>(initialNotifications)

  const unreadCount = notifications.filter(n => !n.read).length

  const markRead = useCallback((id: string) => {
    setNotifications(ns => ns.map(n => n.id === id ? { ...n, read: true } : n))
    markNotificationReadAction(id)
  }, [])

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, markRead }}>
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  return useContext(NotificationContext)
}
