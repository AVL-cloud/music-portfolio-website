'use client'
import { createContext, useContext, useState, type ReactNode } from 'react'

interface AdminContextValue {
  isAdmin: boolean
  editMode: boolean
  setEditMode: (v: boolean) => void
}

const AdminContext = createContext<AdminContextValue>({
  isAdmin: false,
  editMode: false,
  setEditMode: () => {},
})

export function AdminProvider({ children, isAdmin }: { children: ReactNode; isAdmin: boolean }) {
  const [editMode, setEditMode] = useState(false)
  return (
    <AdminContext.Provider value={{ isAdmin, editMode, setEditMode }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  return useContext(AdminContext)
}
