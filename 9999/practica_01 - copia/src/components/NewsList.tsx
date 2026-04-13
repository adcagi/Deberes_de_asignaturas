import NewsCard from './NewsCard';

const NewsList = () => {
  const news = [
    'React 2026 novedades',
    'TypeScript mejora rendimiento',
    'Nueva tecnología IA',
  ];

  return (
    <div style={{ flex: 2 }}>
      {news.map((n, i) => (
        <NewsCard key={i} title={n} />
      ))}
    </div>
  );
};

export default NewsList;