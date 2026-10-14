import { useState } from 'react'

// 导航项配置（锚点对应各 section 的 id）
const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

/**
 * 顶部导航栏
 * - 桌面端横排导航，移动端折叠为汉堡菜单
 * - 半透明 + 毛玻璃背景，固定在顶部
 */
function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo：使用渐变色作为强调色 */}
        <a
          href="#home"
          className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          MyPortfolio
        </a>

        {/* 桌面端导航 */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 移动端汉堡按钮 */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="切换菜单"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* 移动端下拉菜单 */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-2 bg-[#0a0a0a]/95">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Header
