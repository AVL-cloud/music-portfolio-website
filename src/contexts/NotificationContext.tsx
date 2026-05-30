'use client'
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

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
  markAllRead: () => void
  addNotification: (n: Omit<AppNotification, 'id' | 'read' | 'createdAt'>) => void
}

const NotificationContext = createContext<NotificationContextValue>({
  notifications: [],
  unreadCount: 0,
  markRead: () => {},
  markAllRead: () => {},
  addNotification: () => {},
})

// Mock initial notifications for development
const MOCK: AppNotification[] = [
  {
    id: '1',
    title: 'Reply to your message',
    body: 'Antoine replied to your contact message.',
    link: '/contact',
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 15),
  },
]

export function NotificationProvider({ children, isLoggedIn }: { children: ReactNode; isLoggedIn: boolean }) {
  const [notifications, setNotifications] = useState<AppNotification[]>(isLoggedIn ? MOCK : [])

  const unreadCount = notifications.filter(n => !n.read).length

  const markRead = useCallback((id: string) => {
    setNotifications(ns => ns.map(n => n.id === id ? { ...n, read: true } : n))
  }, [])

  const markAllRead = useCallback(() => {
    setNotifications(ns => ns.map(n => ({ ...n, read: true })))
  }, [])

  const addNotification = useCallback((n: Omit<AppNotification, 'id' | 'read' | 'createdAt'>) => {
    setNotifications(ns => [{
      ...n,
      id: Math.random().toString(36).slice(2),
      read: false,
      createdAt: new Date(),
    }, ...ns])
  }, [])

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, markRead, markAllRead, addNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  return useContext(NotificationContext)
}
