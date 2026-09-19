import {
    Search,
    Bell,
    ChevronDown
} from 'lucide-react'

function Header() {
    return (
        <header className="header">
            <div className="header-search">
                <Search size={20} />

                <input
                    type="search"
                    placeholder="Найти аниме, мангу, персонажа, пользователя..."
                    aria-label="Поиск по сайту"
                />

                <span className="header-search-shortcut">
                    Ctrl K
                </span>
            </div>

            <div className="header-right">
                <nav className="header-languages" aria-label="Выбор языка">
                    <button className="active">RU</button>
                    <button>EN</button>
                    <button>UA</button>
                </nav>

                <button
                    className="header-notification"
                    aria-label="Уведомления"
                >
                    <Bell size={21} />
                    <span className="notification-dot"></span>
                </button>

                <button className="header-profile">
                    <img
                        className="header-avatar"
                        src="/images/avatar.webp"
                        alt="Аватар пользователя"
                    />

                    <span className="header-profile-info">
                        <strong>mindosik</strong>
                        <span>Премиум</span>
                    </span>

                    <ChevronDown size={18} />
                </button>
            </div>
        </header>
    )
}

export default Header