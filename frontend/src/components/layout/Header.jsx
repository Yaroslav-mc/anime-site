import {
    Search,
    Bell,
    ChevronDown,
    UserRound
} from 'lucide-react'

import { useAuth } from '../../context/auth.js'

function Header() {
    const { user, isAuthenticated } = useAuth()

    return (
        <header className="header">
            <form className="header-search" role="search" onSubmit={(event) => event.preventDefault()}>
                <Search size={20} aria-hidden="true" />

                <input
                    type="search"
                    placeholder="Найти аниме, мангу, персонажа, пользователя..."
                    aria-label="Поиск по сайту"
                />

                <kbd className="header-search-shortcut">Ctrl K</kbd>
            </form>

            <div className="header-right">
                <div className="header-languages" role="group" aria-label="Выбор языка">
                    <button type="button" className="active" aria-pressed="true">RU</button>
                    <button type="button" aria-pressed="false">EN</button>
                    <button type="button" aria-pressed="false">UA</button>
                </div>

                {isAuthenticated ? (
                    <>
                        <button type="button" className="header-notification" aria-label="Уведомления">
                            <Bell size={21} aria-hidden="true" />
                            <span className="notification-dot" aria-hidden="true"></span>
                        </button>

                        <button type="button" className="header-profile" aria-label="Открыть меню профиля">
                            {user.avatarUrl ? (
                                <img className="header-avatar" src={user.avatarUrl} alt="" />
                            ) : (
                                <span className="header-avatar header-avatar-fallback" aria-hidden="true">
                                    <UserRound size={21} />
                                </span>
                            )}

                            <span className="header-profile-info">
                                <strong>{user.username}</strong>
                                <span>{user.plan}</span>
                            </span>

                            <ChevronDown size={18} aria-hidden="true" />
                        </button>
                    </>
                ) : (
                    <div className="header-auth">
                        <button type="button" className="header-login">Войти</button>
                        <button type="button" className="header-register">Регистрация</button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header