export default function FeaturedCategories({ title, src }) {
  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <div className="category-item">
      <div className="category-item-img">
        <img src={src} alt={title} loading="lazy" />
      </div>
      <div className="category-item-link">
        <a href="" onClick={handleClick}>
          {title}
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
