import { ArrowRight } from 'lucide-react'

import AnimeCard from '../anime/AnimeCard.jsx'

import posterOne from '../../assets/images/home/popular/poster-1.jpg'
import posterTwo from '../../assets/images/home/popular/poster-2.jpg'
import posterThree from '../../assets/images/home/popular/poster-3.jpg'
import posterFour from '../../assets/images/home/popular/poster-4.jpg'
import posterFive from '../../assets/images/home/popular/poster-5.jpg'
import posterSix from '../../assets/images/home/popular/poster-6.jpg'

const popularItems = [
    {
        image: posterOne,
        title: 'Пепел надежды',
        type: 'TV',
        year: '2024',
        rating: '9.2'
    },
    {
        image: posterTwo,
        title: 'Сломанные небеса',
        type: 'TV',
        year: '2023',
        rating: '8.8'
    },
    {
        image: posterThree,
        title: 'Мелодия вечности',
        type: 'TV',
        year: '2024',
        rating: '9.1'
    },
    {
        image: posterFour,
        title: 'Под алым небом',
        type: 'Фильм',
        year: '2023',
        rating: '9.1'
    },
    {
        image: posterFive,
        title: 'Тихие голоса',
        type: 'TV',
        year: '2024',
        rating: '8.9'
    },
    {
        image: posterSix,
        title: 'Город в тумане',
        type: 'TV',
        year: '2023',
        rating: '8.7'
    }
]

function PopularSection() {
    return (
        <section className="popular-section" aria-labelledby="popular-title">
            <header className="popular-header">
                <div className="popular-heading">
                    <h2 id="popular-title">Популярное сегодня</h2>

                    <nav className="popular-filters" aria-label="Фильтр популярного">
                        <button type="button" className="active">Все</button>
                        <button type="button">Аниме</button>
                        <button type="button">Манга</button>
                        <button type="button">Фильмы</button>
                    </nav>
                </div>

                <a href="/anime" className="popular-more">
                    Смотреть все
                    <ArrowRight size={15} aria-hidden="true" />
                </a>
            </header>

            <div className="popular-grid">
                {popularItems.map((item) => (
                    <AnimeCard key={item.title} {...item} />
                ))}
            </div>
        </section>
    )
}

export default PopularSection