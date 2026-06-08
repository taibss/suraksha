import React from "react";

const RADAR = [
  "Digital arrest / fake police video call",
  "Telegram investment scam",
  "Fake loan app harassment",
  "WhatsApp KYC scam",
  "QR receive-money scam",
  "Courier/customs parcel scam",
  "Task job scam",
  "Sextortion",
];

export default function Home({ tree }) {
  return (
    <div>
      <div className="breadcrumb">Homepage</div>
      <h2>What Suraksha should broadly become</h2>
      <p>
        Suraksha is a guided panic-to-plan system for Indian users facing
        scams, threats, cybercrime reporting friction, bank recovery issues,
        and high-frequency legal problems.
      </p>
      <div className="kpi">
        <div>
          <b>4</b>
          <br />
          <span className="small">primary doors</span>
        </div>
        <div>
          <b>{Object.keys(tree.leaves).length}</b>
          <br />
          <span className="small">leaf result pages</span>
        </div>
        <div>
          <b>1</b>
          <br />
          <span className="small">AI router fallback</span>
        </div>
        <div>
          <b>0</b>
          <br />
          <span className="small">fake stats / fake lawyers</span>
        </div>
      </div>
      <div className="card">
        <h3>User mental model</h3>
        <span className="pill">I lost money</span>
        <span className="pill">Someone is threatening me</span>
        <span className="pill">Police/bank/cyber portal not helping</span>
        <span className="pill">Work/home/family problem</span>
      </div>
      <div className="card">
        <h3>Scam Radar section</h3>
        <div className="scamradar">
          {RADAR.map((x) => (
            <div className="card scam" key={x}>
              <b>{x}</b>
              <p className="small">
                Show: how it works, red flags, immediate action, report button.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <h3>Engineering rule</h3>
        <pre>
{`Frontend reads a JSON/database tree and renders: door → question → option → result page. Admin can add/edit situations later without code changes.`}
        </pre>
      </div>
    </div>
  );
}
