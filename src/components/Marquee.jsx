const phrases = [
  "FRONTEND DEVELOPMENT",
  "INTERFACE DESIGN",
  "MOTION SYSTEMS",
  "RESPONSIVE BUILD",
  "OPEN FOR PROJECTS",
  "REACT / CSS / JAVASCRIPT",
];

function Group() {
  return (
    <span className="marquee__group">
      {phrases.map((phrase, index) => (
        <span className="marquee__item" key={`${phrase}-${index}`}>
          <span className={index % 2 ? "marquee__outline" : ""}>{phrase}</span>
          <span className="marquee__star" aria-hidden="true">
            ✳
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Group />
        <Group />
      </div>
    </div>
  );
}