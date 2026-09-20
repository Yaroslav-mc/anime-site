import { ArrowRight, Play } from 'lucide-react'

import heroBackground from '../../assets/images/home/hero/hero-background.jpg'
import storyOne from '../../assets/images/home/hero/story-1.jpg'
import storyTwo from '../../assets/images/home/hero/story-2.jpg'
import storyThree from '../../assets/images/home/hero/story-3.jpg'

function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <img className="hero-background" src={heroBackground} alt="" aria-hidden="true" fetchPriority="high" />
            <div className="hero-overlay" aria-hidden="true"></div>

            <div className="hero-content">
                <p className="hero-eyebrow">
                    ТВОЙ МИР. БОЛЬШЕ, ЧЕМ ПРОСТО АНИМЕ
                </p>

                <h1 id="hero-title" className="hero-title">
                    Yupi<span>Yupi</span>
                </h1>

                <p className="hero-description">
                    Смотри. Читай. Коллекционируй. Общайся.
                </p>

                <div className="hero-actions">
                    <button type="button" className="hero-primary-button">
                        Начать путешествие
                        <ArrowRight size={19} aria-hidden="true" />
                    </button>

                    <button type="button" className="hero-play-button" aria-label="Воспроизвести трейлер YupiYupi">
                        <Play size={20} fill="currentColor" aria-hidden="true" />
                    </button>

                    <div className="hero-trailer-text">
                        <span>Трейлер</span>
                        <strong>YupiYupi</strong>
                    </div>
                </div>

                <dl className="hero-stats">
                    <div className="hero-stat">
                        <dt>50K+</dt>
                        <dd>Пользователей</dd>
                    </div>

                    <div className="hero-stat">
                        <dt>10K+</dt>
                        <dd>Тайтлов</dd>
                    </div>

                    <div className="hero-stat">
                        <dt>100K+</dt>
                        <dd>Участников сообщества</dd>
                    </div>

                    <div className="hero-stat">
                        <dt>∞</dt>
                        <dd>Больше хороших историй</dd>
                    </div>
                </dl>
            </div>

            <aside className="hero-side" aria-label="Рекомендуемые истории">
                <article className="hero-story">
                    <img src={storyOne} alt="" aria-hidden="true" />
                    <div className="hero-story-overlay" aria-hidden="true"></div>

                    <p>
                        Иногда<br />
                        одной серии<br />
                        достаточно...
                    </p>

                    <button type="button" aria-label="Воспроизвести первую историю">
                        <Play size={16} aria-hidden="true" />
                    </button>
                </article>

                <article className="hero-story">
                    <img src={storyTwo} alt="" aria-hidden="true" />
                    <div className="hero-story-overlay" aria-hidden="true"></div>

                    <p>
                        Мир<br />
                        в котором<br />
                        ты не один
                    </p>

                    <button type="button" aria-label="Воспроизвести вторую историю">
                        <Play size={16} aria-hidden="true" />
                    </button>
                </article>

                <article className="hero-story">
                    <img src={storyThree} alt="" aria-hidden="true" />
                    <div className="hero-story-overlay" aria-hidden="true"></div>

                    <p>
                        Новые<br />
                        горизонты<br />
                        ждут
                    </p>

                    <button type="button" aria-label="Воспроизвести третью историю">
                        <Play size={16} aria-hidden="true" />
                    </button>
                </article>
            </aside>
        </section>
    )
}

export default Hero