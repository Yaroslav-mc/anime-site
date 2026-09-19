import Sidebar from '../components/layout/Sidebar.jsx'
import Header from '../components/layout/Header.jsx'
import Hero from '../components/home/Hero.jsx'

function Home() {
    return (
        <div className="app-layout">

            <Sidebar />

            <div className="page-content">

                <Header />

                <main className="main-content">
                    <Hero />
                </main>

            </div>

        </div>
    )
}

export default Home