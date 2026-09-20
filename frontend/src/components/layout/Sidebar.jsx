import {
    House,
    PlaySquare,
    BookOpen,
    ShoppingBag,
    MessageCircle,
    Newspaper,
    Bookmark,
    History,
    Settings
} from 'lucide-react'

import { useAuth } from '../../context/AuthContext.jsx'

const mainLinks = [
    { label: 'Главная', href: '/', icon: House, active: true },
    { label: 'Аниме', href: '/anime', icon: PlaySquare },
    { label: 'Манга', href: '/manga', icon: BookOpen },
    { label: 'Магазин', href: '/shop', icon: ShoppingBag },
    { label: 'Сообщество', href: '/community', icon: MessageCircle },
    { label: 'Новости', href: '/news', icon: Newspaper }
]

const userLinks = [
    { label: 'Мои списки', href: '/lists', icon: Bookmark },
    { label: 'История', href: '/history', icon: History },
    { label: 'Настройки', href: '/settings', icon: Settings }
]

function Sidebar() {
    const { isAuthenticated } = useAuth()

    return (
        <aside className="sidebar">
            <a href="/" className="sidebar-logo" aria-label="YupiYupi — главная">
                <span className="sidebar-logo-title">
                    Yupi<span>Yupi</span>
                </span>

                <small className="sidebar-logo-subtitle">
                    — アニメのある生活 —
                </small>
            </a>

            <nav className="sidebar-menu" aria-label="Основная навигация">
                <ul className="sidebar-list">
                    {mainLinks.map(({ label, href, icon: Icon, active }) => (
                        <li key={label}>
                            <a
                                href={href}
                                className={`sidebar-link${active ? ' active' : ''}`}
                                aria-current={active ? 'page' : undefined}
                            >
                                <Icon size={21} aria-hidden="true" />
                                <span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {isAuthenticated && (
                <>
                    <hr className="sidebar-divider" />

                    <nav className="sidebar-menu sidebar-menu-bottom" aria-label="Пользовательская навигация">
                        <ul className="sidebar-list">
                            {userLinks.map(({ label, href, icon: Icon }) => (
                                <li key={label}>
                                    <a href={href} className="sidebar-link">
                                        <Icon size={21} aria-hidden="true" />
                                        <span>{label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </>
            )}

            <div className={`sidebar-promo${isAuthenticated ? '' : ' sidebar-promo-guest'}`}>
                {isAuthenticated ? (
                    <p className="sidebar-promo-text">
                        <span>Больше</span>
                        <span>чем аниме</span>
                        <strong>Это ты.</strong>
                    </p>
                ) : (
                    <p className="sidebar-promo-text">
                        <span>Твой мир аниме</span>
                        <strong>Войди, чтобы сохранять любимое.</strong>
                    </p>
                )}
            </div>
        </aside>
    )
}

export default Sidebar