type AuthUser = {
  email: string
}

const STORAGE_KEY = 'agriassist-user'

export const useAuth = () => {
  const user = useState<AuthUser | null>('auth-user', () => null)

  const hydrateAuth = () => {
    if (!import.meta.client) {
      return
    }

    const saved = window.localStorage.getItem(STORAGE_KEY)
    user.value = saved ? JSON.parse(saved) as AuthUser : null
  }

  const login = (email: string, password: string) => {
    if (!email || !password) {
      throw new Error('Email and password are required.')
    }

    const nextUser = { email }
    user.value = nextUser

    if (import.meta.client) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
    }
  }

  const logout = () => {
    user.value = null

    if (import.meta.client) {
      window.localStorage.removeItem(STORAGE_KEY)
    }
  }

  return {
    user,
    isLoggedIn: computed(() => Boolean(user.value)),
    hydrateAuth,
    login,
    logout
  }
}
