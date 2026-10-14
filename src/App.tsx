import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * 应用根组件
 * 按 PRD 的功能模块组装页面：导航、首页、关于、项目、联系、页脚
 */
function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
