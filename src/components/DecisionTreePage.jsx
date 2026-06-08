import React, { useState, useMemo } from "react";
import TREE from "../data/data.json";
import Sidebar from "./Sidebar.jsx";
import Home from "./Home.jsx";
import NodeView from "./NodeView.jsx";
import LeafView from "./LeafView.jsx";
import SearchResults from "./SearchResults.jsx";

export default function DecisionTreePage() {
  const [view, setView] = useState({ type: "home" });
  const [doorId, setDoorId] = useState(null);
  const [path, setPath] = useState([]);
  const [search, setSearch] = useState("");

  const currentDoor = useMemo(
    () => (doorId ? TREE.doors.find((d) => d.id === doorId) : null),
    [doorId]
  );

  function openDoor(id) {
    const d = TREE.doors.find((x) => x.id === id);
    setDoorId(id);
    setPath([d.title]);
    setSearch("");
    setView({ type: "node", node: d });
  }

  function chooseOption(node, i) {
    const o = node.options[i];
    const newPath = [...path, o.label];
    setPath(newPath);
    if (o.leaf) setView({ type: "leaf", leafId: o.leaf });
    else setView({ type: "node", node: o });
  }

  function goHome() {
    setDoorId(null);
    setPath([]);
    setSearch("");
    setView({ type: "home" });
  }

  function goBackOne() {
    if (path.length <= 1) return goHome();
    const newPath = path.slice(0, -1);
    setPath(newPath);
    if (newPath.length === 1) {
      setView({ type: "node", node: currentDoor });
      return;
    }
    let n = currentDoor;
    for (let i = 1; i < newPath.length; i++) {
      n = n.options.find((o) => o.label === newPath[i]);
    }
    setView({ type: "node", node: n });
  }

  function openSearch(q) {
    setSearch(q);
    if (!q.trim()) setView({ type: "home" });
    else setView({ type: "search", query: q });
  }

  function openLeafFromSearch(id, title, label = "Search") {
    setPath([label, title]);
    setView({ type: "leaf", leafId: id });
  }

  return (
    <div className="grid">
      <Sidebar
        tree={TREE}
        activeDoor={doorId}
        onOpenDoor={openDoor}
        search={search}
        onSearch={openSearch}
        onAIRoute={(id, title) => openLeafFromSearch(id, title, "AI routed")}
      />
      <main className="main">
        {view.type === "home" && <Home tree={TREE} />}
        {view.type === "node" && (
          <NodeView
            node={view.node}
            path={path}
            onChoose={(i) => chooseOption(view.node, i)}
            onHome={goHome}
          />
        )}
        {view.type === "leaf" && (
          <LeafView
            leafId={view.leafId}
            leaf={TREE.leaves[view.leafId]}
            path={path}
            onBackOne={goBackOne}
            onHome={goHome}
          />
        )}
        {view.type === "search" && (
          <SearchResults
            tree={TREE}
            query={view.query}
            onOpen={(id, title) => openLeafFromSearch(id, title)}
          />
        )}
      </main>
    </div>
  );
}
