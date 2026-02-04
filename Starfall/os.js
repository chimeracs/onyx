function openApp(path) {
  const win = document.createElement("div");
  win.className = "window";

  const iframe = document.createElement("iframe");
  iframe.src = path;

  win.appendChild(iframe);
  document.getElementById("desktop").appendChild(win);

  win.onclick = () => win.style.zIndex = Date.now();
}

<script>
const PROXY_BASE = "https://55gms.com";

function navigate() {
  let url = document.getElementById("urlInput").value.trim();
  const mode = document.getElementById("mode").value;
  const frame = document.getElementById("frame");

  if (!url) return;

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  if (mode === "proxy") {
    // Option A: load proxy homepage (most compatible)frame.src = PROXY_BASE;

    frame.src = PROXY_BASE;

    // Option B (ONLY if the proxy supports URL params)
    // frame.src = `${PROXY_BASE}/?url=${encodeURIComponent(url)}`;
  } else {
    frame.src = url;
  }
}
</script>
