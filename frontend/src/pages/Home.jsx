import AppShell from '../components/layout/AppShell.jsx'
import Hero from '../components/home/Hero.jsx'
import PopularSection from '../components/home/PopularSection.jsx'
import HomeSideColumn from '../components/home/HomeSideColumn.jsx'
import HomeBottomRow from '../components/home/HomeBottomRow.jsx'

function Home() {
    return (
        <AppShell>
            <Hero />

            <div className="home-grid">
                <div className="home-main-column">
                    <PopularSection />
                </div>

                <HomeSideColumn />
            </div>

            <HomeBottomRow />
        </AppShell>
    )
}

export default Home