import format from 'date-fns/format';
import enUS from 'date-fns/locale/en-US';

import styles from "./styles.module.scss";

export function Header() {
    const currentDate = format(new Date(), 'EEE, d MMMM', {
        locale: enUS,
    });

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr"/>

            <p>The best for you listening, always!</p>

            <span>{currentDate}</span>
        </header>
    );
}