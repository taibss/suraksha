import React, { useState, useMemo } from "react";
import TREE from "../data/data.json";
import Sidebar from "./Sidebar.jsx";
import Home from "./Home.jsx";
import NodeView from "./NodeView.jsx";
import LeafView from "./LeafView.jsx";
import SearchResults from "./SearchResults.jsx";

const DecisionTree: React.FC = () => {
  const [view, setView] = useState({ type: "home" });
  const [doorId, setDoorId] = useState<string | null>(null);
  const [path, setPath] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const currentDoor = useMemo(
    () => (doorId ? TREE.doors.find((d: any) => d.id === doorId) : null),
    [doorId]
  );

  function openDoor(id: string) {
    const d = TREE.doors.find((x: any) => x.id === id);
    setDoorId(id);
    setPath([d.title]);
    setSearch("");
    setView({ type: "node", node: d });
  }

  function chooseOption(node: any, i: number) {
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
    let n: any = currentDoor;
    for (let i = 1; i < newPath.length; i++) {
      n = n.options.find((o: any) => o.label === newPath[i]);
    }
    setView({ type: "node", node: n });
  }

  function openSearch(q: string) {
    setSearch(q);
    if (!q.trim()) setView({ type: "home" });
    else setView({ type: "search", query: q });
  }

  function openLeafFromSearch(id: string, title: string, label = "Search") {
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
        onAIRoute={(id: string, title: string) => openLeafFromSearch(id, title, "AI routed")}
      />
      <main className="main">
        {view.type === "home" && <Home tree={TREE} />}
        {view.type === "node" && (
          <NodeView
            node={(view as any).node}
            path={path}
            onChoose={(i: number) => chooseOption((view as any).node, i)}
            onHome={goHome}
          />
        )}
        {view.type === "leaf" && (
          <LeafView
            leafId={(view as any).leafId}
            leaf={(TREE.leaves as any)[(view as any).leafId]}
            path={path}
            onBackOne={goBackOne}
            onHome={goHome}
          />
        )}
        {view.type === "search" && (
          <SearchResults
            tree={TREE}
            query={(view as any).query}
            onOpen={(id: string, title: string) => openLeafFromSearch(id, title)}
          />
        )}
      </main>
    </div>
  );
};

export default DecisionTree;
