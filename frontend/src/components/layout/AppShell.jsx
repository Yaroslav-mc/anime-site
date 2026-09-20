import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'

function AppShell({ children }) {
    return (
        <div className="app-layout">
            <Sidebar />

            <div className="page-content">
                <Header />

                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AppShell