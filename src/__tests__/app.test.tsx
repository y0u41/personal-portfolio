import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { profile } from '../data/site'
import { projects } from '../data/projects'
import { skills } from '../data/skills'

describe('数据完整性', () => {
  it('profile 包含必需字段', () => {
    expect(profile.name).toBeTruthy()
    expect(profile.title).toBeTruthy()
    expect(profile.intro).toBeTruthy()
    expect(profile.email).toMatch(/@/)
    expect(profile.github).toMatch(/^https:\/\/github\.com\//)
  })

  it('projects 至少有 1 个项目且字段完整', () => {
    expect(projects.length).toBeGreaterThan(0)
    for (const p of projects) {
      expect(p.name).toBeTruthy()
      expect(p.description).toBeTruthy()
      expect(p.techStack.length).toBeGreaterThan(0)
      expect(p.link).toMatch(/^https:\/\//)
    }
  })

  it('skills 的 level 在 0-100 范围内', () => {
    for (const s of skills) {
      expect(s.level).toBeGreaterThanOrEqual(0)
      expect(s.level).toBeLessThanOrEqual(100)
    }
  })
})

describe('Header 组件', () => {
  it('渲染 Logo', () => {
    render(<Header />)
    expect(screen.getByText('MyPortfolio')).toBeInTheDocument()
  })

  it('渲染导航链接', () => {
    render(<Header />)
    expect(screen.getByText('首页')).toBeInTheDocument()
    expect(screen.getByText('关于我')).toBeInTheDocument()
    expect(screen.getByText('项目')).toBeInTheDocument()
    expect(screen.getByText('联系')).toBeInTheDocument()
  })
})

describe('Hero 组件', () => {
  it('渲染姓名和头衔', () => {
    render(<Hero />)
    expect(screen.getByText(profile.name)).toBeInTheDocument()
    expect(screen.getByText(profile.title)).toBeInTheDocument()
  })

  it('渲染简介文本', () => {
    render(<Hero />)
    expect(screen.getByText(/我是 yu/)).toBeInTheDocument()
  })
})

describe('Footer 组件', () => {
  it('渲染版权信息含姓名和年份', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`©.*${year}.*${profile.name}`))).toBeInTheDocument()
  })
})
