'use client'

import { useEffect, useState } from 'react'
import { Switch, Label } from '@/components'

type Theme = 'dark' | 'light' | null

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>(null)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setTheme(theme as Theme)
    } else {
      const systemColor = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      setTheme(systemColor ? 'dark' : 'light')
    }
  }, [])

  function toggleDarkMode() {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    } else if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <div className='flex gap-3 items-center'>
      <Switch
        id='darkmode-switch'
        checked={theme === 'dark' ? true : false}
        onCheckedChange={toggleDarkMode}
      />
      <Label htmlFor='darkmode-switch'>DARK MODE</Label>
    </div>
  )
}
