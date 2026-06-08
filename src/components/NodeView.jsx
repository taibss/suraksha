import React from "react";

export default function NodeView({ node, path, onChoose, onHome }) {
  return (
    <div>
      <div className="breadcrumb">{path.join(" → ")}</div>
      <h2>
        {node.emoji || ""} {node.title || "Decision Point"}
      </h2>
      {node.subtitle && <p className="small">{node.subtitle}</p>}
      <div className="card">
        <h3>{node.question}</h3>
        <div className="options">
          {node.options.map((o, i) => (
            <button
              key={i}
              className={o.leaf ? "leafbtn" : "nodebtn"}
              onClick={() => onChoose(i)}
            >
              <b>{o.label}</b>
              <br />
              <span className="small">
                {o.leaf ? "Open result/action plan" : "Go deeper"}
              </span>
            </button>
          ))}
        </div>
      </div>
      <button className="action secondary" onClick={onHome}>
        Back to homepage
      </button>
    </div>
  );
}
