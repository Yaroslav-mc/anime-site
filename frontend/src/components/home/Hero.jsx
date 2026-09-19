import { ArrowRight, Play } from 'lucide-react'

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <p className="hero-eyebrow">
                    ТВОЙ МИР. БОЛЬШЕ, ЧЕМ ПРОСТО АНИМЕ
                </p>

                <h1 className="hero-title">
                    Yupi<span>Yupi</span>
                </h1>

                <p className="hero-description">
                    Смотри. Читай. Коллекционируй. Общайся.
                </p>

                <div className="hero-actions">

                    <button className="hero-primary-button">
                        Начать путешествие
                        <ArrowRight size={19} />
                    </button>

                    <button className="hero-play-button">
                        <Play size={20} fill="currentColor" />
                    </button>

                    <div className="hero-trailer-text">
                        <span>Трейлер</span>
                        <strong>YupiYupi</strong>
                    </div>

                </div>

                <div className="hero-stats">

                    <div className="hero-stat">
                        <strong>50K+</strong>
                        <span>Пользователей</span>
                    </div>

                    <div className="hero-stat">
                        <strong>10K+</strong>
                        <span>Тайтлов</span>
                    </div>

                    <div className="hero-stat">
                        <strong>100K+</strong>
                        <span>Участников сообщества</span>
                    </div>

                    <div className="hero-stat">
                        <strong>∞</strong>
                        <span>Больше хороших историй</span>
                    </div>

                </div>

            </div>


            <div className="hero-side">

                <article className="hero-story">
                    <span>
                        Иногда<br />
                        одной серии<br />
                        достаточно...
                    </span>

                    <button>
                        <Play size={16} />
                    </button>
                </article>

                <article className="hero-story">
                    <span>
                        Мир<br />
                        в котором<br />
                        ты не один
                    </span>

                    <button>
                        <Play size={16} />
                    </button>
                </article>

                <article className="hero-story">
                    <span>
                        Новые<br />
                        горизонты<br />
                        ждут
                    </span>

                    <button>
                        <Play size={16} />
                    </button>
                </article>

            </div>

        </section>
    )
}

export default Hero