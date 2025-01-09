
import styles from './App.module.css'
import { Navbar } from './componets/Navbar/Navbar'
import { Hero } from './Hero/Hero'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      </div>
  )
}

export default App
