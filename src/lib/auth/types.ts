export interface User {
  id: string
  email: string
  username?: string
  passwordHash: string
  role: 'member' | 'admin'
  createdAt: string
}

export interface SessionUser {
  id: string
  email: string
  username?: string
  role: 'member' | 'admin'
}
