window.mermaid.initialize({
  startOnLoad: false,
  theme: document.body.getAttribute("data-md-color-scheme") === "slate" ? "dark" : "default",
  securityLevel: "loose"
});

document$.subscribe(function () {
  window.mermaid.run({ querySelector: ".mermaid" });
});
