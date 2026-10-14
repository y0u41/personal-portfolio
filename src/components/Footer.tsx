import { profile } from '../data/site'

/**
 * 页脚
 * 版权信息，顶部细分割线
 */
function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
