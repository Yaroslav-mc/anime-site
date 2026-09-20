import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'

function AppShell({ children }) {
    return (
        <div className="app-layout">
            <Sidebar />

            <div className="page-content">
                <Header />

                <main className="main-content">
                    {children}
                </main>

                <Footer />
            </div>
        </div>
    )
}

export default AppShell