export function BizStackOrbit() {
  return (
    <div className="bizstack-orbit" role="img" aria-label="BizStack connects brand, web, AI and sales around growth">
      <div className="bizstack-orbit-grid" aria-hidden="true" />
      <div className="bizstack-orbit-ring" aria-hidden="true">
        {[
          { label: "Brand", x: 100, y: 50 },
          { label: "Web", x: 50, y: 100 },
          { label: "AI", x: 0, y: 50 },
          { label: "Sales", x: 50, y: 0 },
        ].map(({ label, x, y }) => (
          <span key={label} className="bizstack-orbit-node" style={{ left: `${x}%`, top: `${y}%` }}><span className="bizstack-orbit-label">{label}</span></span>
        ))}
      </div>
      <span className="bizstack-orbit-center" aria-hidden="true">Growth</span>
    </div>
  );
}
