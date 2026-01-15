export default function ItemSolution({
  label,
  subTitle,
  content,
  src,
  isReverse,
}) {
  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className={!isReverse ? "solution-item" : "solution-item-reverse"}>
      <div
        className={!isReverse ? "sol-item-content" : "sol-item-content-reverse"}
      >
        <p className="sec-label">{label}</p>
        <h3>{subTitle}</h3>
        <p>{content}</p>
        <a href="" onClick={handleClick} className="cta">
          Learn More &rarr;
        </a>
      </div>
      <div
        className={!isReverse ? "sol-item-image" : "sol-item-image last-image"}
      >
        <img src={src} alt={label} loading="lazy" />
      </div>
    </div>
  );
}
