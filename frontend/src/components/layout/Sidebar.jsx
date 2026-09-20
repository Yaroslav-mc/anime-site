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

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-logo">
                <div className="sidebar-logo-title">
                    Yupi<span>Yupi</span>
                </div>

                <div className="sidebar-logo-subtitle">
                    — アニメのある生活 —
                </div>
            </div>

            <nav className="sidebar-menu" aria-label="Основная навигация">

                <a href="#" className="sidebar-link active">
                    <House size={21} />
                    <span>Главная</span>
                </a>

                <a href="#" className="sidebar-link">
                    <PlaySquare size={21} />
                    <span>Аниме</span>
                </a>

                <a href="#" className="sidebar-link">
                    <BookOpen size={21} />
                    <span>Манга</span>
                </a>

                <a href="#" className="sidebar-link">
                    <ShoppingBag size={21} />
                    <span>Магазин</span>
                </a>

                <a href="#" className="sidebar-link">
                    <MessageCircle size={21} />
                    <span>Сообщество</span>
                </a>

                <a href="#" className="sidebar-link">
                    <Newspaper size={21} />
                    <span>Новости</span>
                </a>

            </nav>

            <hr className="sidebar-divider" />

            <nav className="sidebar-menu sidebar-menu-bottom" aria-label="Пользовательская навигация">

                <a href="#" className="sidebar-link">
                    <Bookmark size={21} />
                    <span>Мои списки</span>
                </a>

                <a href="#" className="sidebar-link">
                    <History size={21} />
                    <span>История</span>
                </a>

                <a href="#" className="sidebar-link">
                    <Settings size={21} />
                    <span>Настройки</span>
                </a>

            </nav>

            <div className="sidebar-promo">
                <div className="sidebar-promo-text">
                    <span>Больше</span>
                    <span>чем аниме</span>
                    <strong>Это ты.</strong>
                </div>
            </div>

        </aside>
    )
}

export default Sidebar