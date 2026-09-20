import {
    Search,
    Bell,
    ChevronDown
} from 'lucide-react'

function Header() {
    return (
        <header className="header">
            <form
                className="header-search"
                role="search"
                onSubmit={(event) => event.preventDefault()}
            >
                <Search size={20} aria-hidden="true" />

                <input
                    type="search"
                    placeholder="Найти аниме, мангу, персонажа, пользователя..."
                    aria-label="Поиск по сайту"
                />

                <span className="header-search-shortcut">
                    Ctrl K
                </span>
            </form>

            <div className="header-right">
                <div
                    className="header-languages"
                    role="group"
                    aria-label="Выбор языка"
                >
                    <button type="button" className="active">
                        RU
                    </button>

                    <button type="button">
                        EN
                    </button>

                    <button type="button">
                        UA
                    </button>
                </div>

                <button
                    type="button"
                    className="header-notification"
                    aria-label="Уведомления"
                >
                    <Bell size={21} aria-hidden="true" />
                    <span className="notification-dot"></span>
                </button>

                <button
                    type="button"
                    className="header-profile"
                    aria-label="Открыть меню профиля"
                >
                    <img
                        className="header-avatar"
                        src="/images/avatar.webp"
                        alt=""
                    />

                    <span className="header-profile-info">
                        <strong>mindosik</strong>
                        <span>Премиум</span>
                    </span>

                    <ChevronDown size={18} aria-hidden="true" />
                </button>
            </div>
        </header>
    )
}

export default Header