import React from 'react';
import styles from './News.module.css';

const News = () => {
    const newsData = [
        { id: 1, title: 'Breaking News 1', content: 'This is the content of breaking news 1.' },
        { id: 2, title: 'Exciting News 2', content: 'Check out the latest and most exciting news 2.' },
        { id: 3, title: 'Important Update 3', content: 'An important update that you should know 3.' },
    ];
    
    return (
        <div className={styles.news}>
            <h2>Latest News</h2>
            {newsData.map(news => (
                <div key={news.id} className={styles.newsItem}>
                    <h3>{news.title}</h3>
                    <p>{news.content}</p>
                </div>
            ))}
        </div>
    );
};

export default News;
