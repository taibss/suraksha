import React from "react";

export default function SearchResults({ tree, query, onOpen }) {
  const q = query.toLowerCase().trim();
  const matches = Object.entries(tree.leaves)
    .filter(
      ([id, l]) =>
        id.toLowerCase().includes(q) ||
        l.title.toLowerCase().includes(q) ||
        l.explanation.toLowerCase().includes(q)
    )
    .slice(0, 50);

  return (
    <div>
      <div className="breadcrumb">Search</div>
      <h2>Search results for "{query}"</h2>
      <div className="options">
        {matches.length === 0 && <p>No match. Use AI fallback.</p>}
        {matches.map(([id, l]) => (
          <button
            key={id}
            className="leafbtn"
            onClick={() => onOpen(id, l.title)}
          >
            <b>{l.title}</b>
            <br />
            <span className="small">{l.urgency}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
