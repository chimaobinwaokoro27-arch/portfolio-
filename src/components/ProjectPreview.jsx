const calcKeys = [
  ["7", ""],
  ["8", ""],
  ["9", ""],
  ["÷", "op"],
  ["4", ""],
  ["5", ""],
  ["6", ""],
  ["×", "op"],
  ["1", ""],
  ["2", ""],
  ["3", ""],
  ["−", "op"],
  ["0", ""],
  ["00", ""],
  [".", ""],
  ["=", "eq"],
];

function CalculatorPreview() {
  return (
    <div className="pv-calc">
      <div className="pv-calc__head">
        <span className="pv-calc__brand">
          ARISE<sup>®</sup>
        </span>
        <span className="pv-pill">
          <i aria-hidden="true" />
          AI MODE
        </span>
      </div>

      <div className="pv-calc__body">
        <div className="pv-calc__main">
          <span className="pv-calc__history">12,480 × 24</span>
          <span className="pv-calc__display">299,520</span>
          <div className="pv-calc__expr">
            <span>12.48K × 24</span>
            <span>→ 299.52K</span>
          </div>
          <div className="pv-calc__keys">
            {calcKeys.map(([key, variant]) => (
              <span key={key} className={`pv-key ${variant ? `pv-key--${variant}` : ""}`}>
                {key}
              </span>
            ))}
          </div>
        </div>

        <aside className="pv-calc__side">
          <span className="pv-eyebrow">INTERPRETATION</span>
          <p>
            &ldquo;Twelve thousand, four hundred and eighty multiplied by
            twenty-four.&rdquo;
          </p>
          <div className="pv-meter" aria-hidden="true">
            <span style={{ width: "82%" }} />
          </div>
          <div className="pv-calc__row">
            <span>CONFIDENCE</span>
            <span>99.2%</span>
          </div>
          <div className="pv-calc__row">
            <span>EXPRESSION</span>
            <span>PARSED</span>
          </div>
          <div className="pv-calc__note">
            <span aria-hidden="true">↳</span>
            The working stays visible. Nothing happens off-screen.
          </div>
        </aside>
      </div>
    </div>
  );
}

function CineVaultPreview() {
  return (
    <div className="pv-cine">
      <div className="pv-cine__head">
        <span className="pv-cine__brand">
          CINE<span>VAULT</span>
        </span>
        <nav aria-hidden="true">
          <span>INDEX</span>
          <span>SEARCH</span>
          <span>ABOUT</span>
        </nav>
        <span className="pv-pill">ARCHIVE / 2026</span>
      </div>

      <div className="pv-cine__hero">
        <div className="pv-cine__still">
          <span className="pv-cine__frame">FRAME / 001</span>
          <div className="pv-cine__scan" aria-hidden="true" />
          <span className="pv-cine__no">01</span>
        </div>

        <div className="pv-cine__info">
          <span className="pv-eyebrow">FEATURED ARCHIVE</span>
          <h4>
            ARCHIVE
            <br />
            <span>001</span>
          </h4>
          <div className="pv-cine__meta">
            <span>MONOCHROME</span>
            <span>01:48</span>
            <span>2026</span>
          </div>
          <span className="pv-cine__cta">
            <i aria-hidden="true">▶</i> WATCH THE REEL
          </span>
        </div>
      </div>

      <div className="pv-cine__rail" aria-hidden="true">
        {["NOIR", "STILL", "MOTION"].map((label, index) => (
          <div key={label} className={`pv-cine__card pv-cine__card--${index + 1}`}>
            <span>0{index + 1}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StorePreview() {
  return (
    <div className="pv-shop">
      <div className="pv-shop__head">
        <span className="pv-shop__brand">
          OBJECTS<sup>®</sup>
        </span>
        <nav aria-hidden="true">
          <span>SHOP</span>
          <span>INDEX</span>
          <span>CART / 02</span>
        </nav>
      </div>

      <div className="pv-shop__hero">
        <h4>
          OBJECTS
          <br />
          FOR SLOW
          <br />
          ROOMS.
        </h4>
        <span>COLLECTION 01 / 2026</span>
      </div>

      <div className="pv-shop__grid" aria-hidden="true">
        <div className="pv-product">
          <div className="pv-product__art">
            <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M23 62V33l17-9 17 9v29" />
              <path d="M23 46h34M19 62h42M28 62v7M52 62v7" />
              <path d="M31 33v13h18V33" />
            </svg>
          </div>
          <div className="pv-product__meta">
            <span>FORM 01</span>
            <span>$240</span>
          </div>
        </div>

        <div className="pv-product">
          <div className="pv-product__art">
            <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M40 12v8M34 20h12l7 30H27l7-30Z" />
              <path d="M29 50h22M34 58h12M40 58v7M32 65h16" />
            </svg>
          </div>
          <div className="pv-product__meta">
            <span>FORM 02</span>
            <span>$180</span>
          </div>
        </div>

        <div className="pv-product">
          <div className="pv-product__art">
            <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M31 22h18l-3 9c8 6 11 14 8 24H26c-3-10 0-18 8-24l-3-9Z" />
              <path d="M31 22c0-5 4-8 9-8s9 3 9 8M28 55h24" />
            </svg>
          </div>
          <div className="pv-product__meta">
            <span>FORM 03</span>
            <span>$95</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComingSoonPreview() {
  return (
    <div className="pv-coming">
      <div className="pv-coming__head">
        <span className="pv-coming__brand">
          PROJECT
        </span>
      </div>

      <div className="pv-coming__content">
        <h2>COMING SOON</h2>
        <p>New projects are on the way.</p>
        <a href="#contact" className="btn btn--ghost">
          GET IN TOUCH
        </a>
      </div>
    </div>
  );
}

export default function ProjectPreview({ project }) {
  return (
    <div className={`browser browser--${project.visual}`}>
      <div className="browser__bar" aria-hidden="true">
        <span className="browser__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser__address">{project.label}</span>
        <span className="browser__menu">•••</span>
      </div>
      <div className="browser__viewport" aria-hidden="true">
        {project.visual === "calculator" && <CalculatorPreview />}
        {project.visual === "cinevault" && <CineVaultPreview />}
        {project.visual === "store" && <StorePreview />}
        {project.visual === "coming-soon" && <ComingSoonPreview />}
      </div>
      <span className="browser__tag">{project.note}</span>
    </div>
  );
}