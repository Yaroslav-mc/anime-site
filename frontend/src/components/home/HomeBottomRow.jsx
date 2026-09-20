import { ArrowRight, Eye, MessageCircle } from 'lucide-react'

import collectionImage from '../../assets/images/home/collection/collection-bg.jpg'

const watchingItems = [
    { position: 1, title: 'Дандадан', views: '12.4K' },
    { position: 2, title: 'Магическая битва', views: '8.1K' },
    { position: 3, title: 'Ван Пис', views: '6.7K' },
    { position: 4, title: 'Поднятие уровня', views: '6.1K' },
    { position: 5, title: 'Клинок, рассекающий демонов', views: '5.8K' }
]

const activityItems = [
    { user: 'sakura', action: 'опубликовал(а) арт', time: '5 мин назад' },
    { user: 'ki1ro_', action: 'создал(а) обсуждение', time: '12 мин назад' },
    { user: 'nekochan', action: 'добавил(а) в список', time: '17 мин назад' },
    { user: 'void', action: 'оставил(а) комментарий', time: '25 мин назад' },
    { user: 'lumine', action: 'вступил(а) в сообщество', time: '34 мин назад' }
]

function HomeBottomRow() {
    return (
        <section className="home-bottom-row" aria-label="Дополнительный контент главной страницы">
            <a href="/collections" className="collection-banner">
                <img src={collectionImage} alt="" aria-hidden="true" />
                <div className="collection-banner-overlay" aria-hidden="true"></div>

                <div className="collection-banner-content">
                    <h2>Коллекционные карточки</h2>
                    <p>Собирай. Обменивайся. Открывай редкости.</p>

                    <span className="collection-banner-action">
                        Начать коллекцию
                        <ArrowRight size={15} aria-hidden="true" />
                    </span>
                </div>
            </a>

            <section className="watching-panel" aria-labelledby="watching-title">
                <header className="bottom-panel-header">
                    <Eye size={16} aria-hidden="true" />
                    <h2 id="watching-title">Сейчас смотрят</h2>
                </header>

                <ol className="watching-list">
                    {watchingItems.map((item) => (
                        <li key={item.title}>
                            <span className="watching-position">{item.position}</span>

                            <span className="watching-title">{item.title}</span>

                            <span className="watching-views">{item.views}</span>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="activity-panel" aria-labelledby="activity-title">
                <header className="bottom-panel-header">
                    <MessageCircle size={16} aria-hidden="true" />
                    <h2 id="activity-title">Активность сообщества</h2>
                </header>

                <ul className="activity-list">
                    {activityItems.map((item) => (
                        <li key={`${item.user}-${item.time}`}>
                            <div className="activity-avatar">
                                {item.user.charAt(0).toUpperCase()}
                            </div>

                            <p>
                                <strong>{item.user}</strong>
                                <span>{item.action}</span>
                            </p>

                            <time>{item.time}</time>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}

export default HomeBottomRow