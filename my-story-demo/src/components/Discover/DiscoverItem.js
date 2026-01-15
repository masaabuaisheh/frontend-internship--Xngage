export default function DiscoverItem({ src, tag, title, description, isLeft }) {
  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className="discover-card">
      <div className="discover-card-image">
        <img src={src} alt={tag} loading="lazy" />
      </div>
      <div
        className={
          isLeft
            ? "discover-card-content-left-side"
            : "discover-card-content-right-side"
        }
      >
        <p className="discover-tag">{tag}</p>
        <h3 className="discover-title">{title}</h3>
        <p className="discover-desc">{description}</p>
        <a className="cta-disc" href="" onClick={handleClick}>
          Learn More &rarr;
        </a>
      </div>
    </div>
  );
}
