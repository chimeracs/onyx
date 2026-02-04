function openApp(path) {
  const win = document.createElement("div");
  win.className = "window";

  const iframe = document.createElement("iframe");
  iframe.src = path;

  win.appendChild(iframe);
  document.getElementById("desktop").appendChild(win);

  win.onclick = () => win.style.zIndex = Date.now();
}
