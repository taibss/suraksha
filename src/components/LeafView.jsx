import React from "react";

export default function LeafView({ leafId, leaf, path, onBackOne, onHome }) {
  if (!leaf) {
    return (
      <div>
        <div className="breadcrumb">{path.join(" → ")}</div>
        <h2>Unknown leaf: {leafId}</h2>
        <button className="action secondary" onClick={onHome}>
          Homepage
        </button>
      </div>
    );
  }
  return (
    <div>
      <div className="breadcrumb">{path.join(" → ")}</div>
      <h2>{leaf.title}</h2>
      <div className="toprow">
        <span className="pill">Urgency: {leaf.urgency}</span>
        <span className="pill">Leaf ID: {leafId}</span>
      </div>
      <div className="card">
        <h3>What likely happened</h3>
        <p>{leaf.explanation}</p>
      </div>
      <div className="leaf-grid">
        <div className="card">
          <h3>What to do now</h3>
          <ol>
            {leaf.actions.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ol>
        </div>
        <div className="card">
          <h3>Evidence checklist</h3>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {leaf.evidence.map((x, i) => (
              <li key={i}>
                <label>
                  <input type="checkbox" /> {x}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Authorities / routes</h3>
          <ul>
            {leaf.authorities.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Drafts to generate</h3>
          <ul>
            {leaf.drafts.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
          <p>
            <b>Lawyer:</b> {leaf.lawyer}
          </p>
        </div>
      </div>
      <div className="card ai">
        <h3>AI layer on this page</h3>
        <p>
          User can ask follow-up questions, but AI must stay grounded in this
          leaf node and suggest escalation when outside scope.
        </p>
        <textarea placeholder="Ask: what should I write in my cyber complaint?" />
      </div>
      <button className="action secondary" onClick={onBackOne}>
        Back one step
      </button>{" "}
      <button className="action secondary" onClick={onHome}>
        Homepage
      </button>
    </div>
  );
}
