interface Props {
  title: string;
}

const NewsCard = ({ title }: Props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      {title}
    </div>
  );
};

export default NewsCard;