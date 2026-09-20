import { Plus, Star } from 'lucide-react'

function AnimeCard({ image, title, type, year, rating }) {
    return (
        <article className="anime-card">
            <div className="anime-card-poster">
                <img src={image} alt={title} />

                <div className="anime-card-overlay"></div>

                <div className="anime-card-rating">
                    <Star size={13} fill="currentColor" aria-hidden="true" />
                    <span>{rating}</span>
                </div>

                <button type="button" className="anime-card-add" aria-label={`Добавить ${title} в список`}>
                    <Plus size={18} aria-hidden="true" />
                </button>
            </div>

            <h3>{title}</h3>
            <p>{type} · {year}</p>
        </article>
    )
}

export default AnimeCard