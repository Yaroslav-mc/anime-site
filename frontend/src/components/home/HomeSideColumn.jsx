import { ArrowRight } from 'lucide-react'

import communityBackground from '../../assets/images/home/right-column/community-bg.jpg'
import shopBackground from '../../assets/images/home/right-column/shop-bg.jpg'

import avatarOne from '../../assets/images/home/popular/poster-1.jpg'
import avatarTwo from '../../assets/images/home/popular/poster-2.jpg'
import avatarThree from '../../assets/images/home/popular/poster-3.jpg'
import avatarFour from '../../assets/images/home/popular/poster-4.jpg'
import avatarFive from '../../assets/images/home/popular/poster-5.jpg'

const communityAvatars = [
    avatarOne,
    avatarTwo,
    avatarThree,
    avatarFour,
    avatarFive
]

function HomeSideColumn() {
    return (
        <aside className="home-side-column" aria-label="Дополнительные разделы">
            <article className="community-card">
                <img className="side-card-background" src={communityBackground} alt="" aria-hidden="true" />
                <div className="side-card-overlay" aria-hidden="true"></div>

                <div className="community-content">
                    <h2>Присоединяйся<br />к сообществу</h2>

                    <p>
                        Обсуждения · Арты · Мемы<br />
                        Новые друзья
                    </p>

                    <div className="community-members">
                        <ul className="community-avatars" aria-label="Участники сообщества">
                            {communityAvatars.map((avatar, index) => (
                                <li key={avatar}>
                                    <img src={avatar} alt={`Участник сообщества ${index + 1}`} />
                                </li>
                            ))}
                        </ul>

                        <span>10K+ участников</span>
                    </div>
                </div>

                <a href="/community" className="community-action" aria-label="Перейти в сообщество">
                    <ArrowRight size={16} aria-hidden="true" />
                </a>
            </article>

            <article className="shop-card">
                <img className="side-card-background" src={shopBackground} alt="" aria-hidden="true" />
                <div className="shop-card-overlay" aria-hidden="true"></div>

                <div className="shop-content">
                    <h2>
                        Магазин <span>YupiYupi</span>
                    </h2>

                    <p>
                        Фигурки · Постеры · Одежда<br />
                        Эксклюзивные коллекции
                    </p>

                    <a href="/shop" className="shop-card-button">
                        Перейти в магазин
                        <ArrowRight size={13} aria-hidden="true" />
                    </a>
                </div>
            </article>
        </aside>
    )
}

export default HomeSideColumn