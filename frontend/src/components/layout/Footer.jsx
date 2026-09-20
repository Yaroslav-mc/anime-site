import {
    SiDiscord,
    SiTelegram,
    SiVk,
    SiYoutube,
    SiTiktok
} from 'react-icons/si'

import { Heart } from 'lucide-react'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-brand">
                <a href="/" className="footer-logo" aria-label="YupiYupi — главная">
                    Yupi<span>Yupi</span>
                </a>

                <p>Смотри. Читай. Коллекционируй. Общайся.</p>
            </div>

            <nav className="footer-nav" aria-label="Навигация в подвале">
                <a href="/about">О нас</a>
                <a href="/rules">Правила</a>
                <a href="/help">Помощь</a>
                <a href="/copyright">Для правообладателей</a>
                <a href="/contacts">Контакты</a>
            </nav>

            <div className="footer-right">
                <nav className="footer-socials" aria-label="Социальные сети">
                    <a href="#" aria-label="Discord"><SiDiscord /></a>
                    <a href="#" aria-label="Telegram"><SiTelegram /></a>
                    <a href="#" aria-label="VK"><SiVk /></a>
                    <a href="#" aria-label="YouTube"><SiYoutube /></a>
                    <a href="#" aria-label="TikTok"><SiTiktok /></a>
                </nav>

                <div className="footer-divider"></div>

                <p className="footer-love">
                    Создано с любовью<br />
                    для всех, кто любит истории
                </p>

                <Heart className="footer-heart" size={18} aria-hidden="true" />
            </div>
        </footer>
    )
}

export default Footer