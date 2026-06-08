import React, { useState } from "react";

export default function Sidebar({
  tree,
  activeDoor,
  onOpenDoor,
  search,
  onSearch,
  onAIRoute,
}) {
  const [aiText, setAiText] = useState("");
  const [aiResult, setAiResult] = useState(null);

  function mockAI() {
    const t = aiText.toLowerCase();
    let id = "cyber_report_needed";
    if (
      t.includes("digital") ||
      t.includes("video") ||
      t.includes("cbi") ||
      t.includes("police")
    )
      id = "digital_arrest";
    if (
      t.includes("telegram") ||
      t.includes("investment") ||
      t.includes("stock")
    )
      id = "telegram_investment";
    if (
      t.includes("loan") &&
      (t.includes("family") ||
        t.includes("photo") ||
        t.includes("contact"))
    )
      id = "loan_app_contacts";
    if (t.includes("upi") || t.includes("gpay") || t.includes("phonepe"))
      id = "upi_paid_blocked";
    if (t.includes("qr")) id = "qr_receive_scam";
    if (
      t.includes("sextortion") ||
      t.includes("nude") ||
      t.includes("intimate")
    )
      id = "sextortion_real";
    const l = tree.leaves[id];
    setAiResult({ id, title: l?.title || id });
  }

  return (
    <aside className="sidebar">
      <h3>Start Here</h3>
      <p className="small">
        SWE handoff: build a renderer for this tree. Do not hardcode pages.
        Every door, question, option, leaf, action and checklist should come
        from JSON/database.
      </p>
      <input
        className="search"
        placeholder="Search leaf nodes: UPI, loan app, digital arrest..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <div>
        {tree.doors.map((d) => (
          <button
            key={d.id}
            className={"door" + (activeDoor === d.id ? " active" : "")}
            onClick={() => onOpenDoor(d.id)}
          >
            <b>
              {d.emoji} {d.title}
            </b>
            <br />
            <span className="small">{d.subtitle}</span>
          </button>
        ))}
      </div>
      <div className="card ai">
        <h3>🤖 AI fallback</h3>
        <p className="small">
          If user cannot find issue, user describes it. AI classifies into
          nearest leaf and routes into the same tree.
        </p>
        <textarea
          value={aiText}
          onChange={(e) => setAiText(e.target.value)}
          placeholder="Example: fake police video call says my parcel has drugs and asks me to transfer money"
        />
        <button className="action" onClick={mockAI}>
          Mock classify
        </button>
        {aiResult && (
          <div className="small">
            <br />
            <b>Mock classification:</b> {aiResult.title}
            <br />
            <button
              className="action"
              onClick={() => onAIRoute(aiResult.id, aiResult.title)}
            >
              Open routed result
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
