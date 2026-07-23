(function () {
  const storageKey = "ielts11-color-theme";
  let savedTheme = null;

  try {
    savedTheme = window.localStorage.getItem(storageKey);
  } catch (error) {
    savedTheme = null;
  }

  const preferredTheme =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const initialTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : preferredTheme;
  document.documentElement.dataset.theme = initialTheme;

  const style = document.createElement("style");
  style.textContent = `
    html[data-theme="light"] { color-scheme: light; }
    html[data-theme="dark"] {
      color-scheme: dark;
      --ink: #f4f7ff;
      --muted: #b8c0d4;
      --line: rgba(173, 196, 255, 0.2);
      --paper: #080910;
      --soft: #111521;
      --brand: #45c9e8;
      --brand-dark: #278ea5;
    }

    .theme-toggle {
      display: grid;
      width: 40px;
      height: 40px;
      flex: 0 0 40px;
      place-items: center;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 0;
      color: var(--ink);
      background: var(--paper, #fff);
      cursor: pointer;
      font: inherit;
      font-size: 20px;
      line-height: 1;
      transition: transform 140ms ease, border-color 140ms ease, background 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }

    .theme-toggle:hover { border-color: var(--brand); }
    .theme-toggle:active { transform: translateY(2px) scale(0.96); }
    .theme-toggle:focus-visible { outline: 3px solid rgba(69, 201, 232, 0.35); outline-offset: 2px; }

    html[data-theme="dark"] body { color: var(--ink); background: #080910; }
    html[data-theme="dark"] .nav {
      border-color: rgba(173, 196, 255, 0.18);
      color: #f4f7ff;
      background: rgba(8, 9, 16, 0.92);
    }
    html[data-theme="dark"] .category-link,
    html[data-theme="dark"] .login-link,
    html[data-theme="dark"] .outline-btn,
    html[data-theme="dark"] .theme-toggle,
    html[data-theme="dark"] .reset-day-btn,
    html[data-theme="dark"] .day-pagination a {
      border-color: rgba(173, 196, 255, 0.22);
      color: #eef2ff;
      background: #151925;
    }
    html[data-theme="dark"] .mission-grid article,
    html[data-theme="dark"] .typing-mission,
    html[data-theme="dark"] .mission-icon-card,
    html[data-theme="dark"] .allocation-grid,
    html[data-theme="dark"] .course-phase,
    html[data-theme="dark"] .day-icon,
    html[data-theme="dark"] .exam-focus-band,
    html[data-theme="dark"] .day-time-plan,
    html[data-theme="dark"] .lesson-block,
    html[data-theme="dark"] .day-completion,
    html[data-theme="dark"] .coupon-panel,
    html[data-theme="dark"] .benefit {
      border-color: rgba(173, 196, 255, 0.18);
      color: #f4f7ff;
      background: #121521;
    }
    html[data-theme="dark"] input,
    html[data-theme="dark"] textarea,
    html[data-theme="dark"] select {
      border-color: rgba(173, 196, 255, 0.25);
      color: #f4f7ff;
      background: #090b12;
    }
    html[data-theme="dark"] .category-section,
    html[data-theme="dark"] .below { background: #0d1019; }
    html[data-theme="dark"] .category-card,
    html[data-theme="dark"] .price-box { background: #151925; }

    html[data-theme="light"] .beginner-space-theme {
      --ink: #121826;
      --muted: #5f6b7a;
      --line: #dfe5ee;
      --soft: #f6f8fb;
      --brand: #0f6bff;
      --accent: #ff8a66;
      color: var(--ink);
      background: #f6f8fb;
    }
    html[data-theme="light"] .beginner-space-theme .nav {
      border-color: #dfe5ee;
      color: #121826;
      background: rgba(255, 255, 255, 0.94);
    }
    html[data-theme="light"] .beginner-space-theme .category-link,
    html[data-theme="light"] .beginner-space-theme .login-link,
    html[data-theme="light"] .beginner-space-theme .theme-toggle {
      border-color: #dfe5ee;
      color: #121826;
      background: #fff;
    }
    html[data-theme="light"] .beginner-space-theme .category-link.active,
    html[data-theme="light"] .beginner-space-theme .category-link:hover {
      border-color: #0f6bff;
      color: #fff;
      background: #0f6bff;
    }
    html[data-theme="light"] .beginner-space-theme .allocation-grid,
    html[data-theme="light"] .beginner-space-theme .course-phase,
    html[data-theme="light"] .beginner-space-theme .day-time-plan,
    html[data-theme="light"] .beginner-space-theme .lesson-block,
    html[data-theme="light"] .beginner-space-theme .exam-focus-band,
    html[data-theme="light"] .beginner-space-theme .day-completion,
    html[data-theme="light"] .beginner-space-theme .day-pagination a {
      border-color: #dfe5ee;
      color: #121826;
      background: #fff;
      box-shadow: 0 12px 34px rgba(30, 45, 70, 0.08);
    }
    html[data-theme="light"] .beginner-space-theme .day-icon {
      border-color: #dfe5ee;
      color: #121826;
      background: #fff;
    }
    html[data-theme="light"] .beginner-space-theme .day-icon:hover { background: #eef8fb; }
    html[data-theme="light"] .beginner-space-theme .vocabulary-grid > div,
    html[data-theme="light"] .beginner-space-theme .listening-line-list article,
    html[data-theme="light"] .beginner-space-theme .reading-passage,
    html[data-theme="light"] .beginner-space-theme .sample-answer,
    html[data-theme="light"] .beginner-space-theme .sentence-pattern {
      border-color: #dfe5ee;
      color: #121826;
      background: #f7f9fc;
    }
    html[data-theme="light"] .beginner-space-theme .complete-translation { color: #445063 !important; }
    html[data-theme="light"] .beginner-space-theme .korean-pronunciation { color: #a33b00 !important; }
    html[data-theme="light"] .beginner-space-theme .course-writing-field textarea {
      border-color: #cfd7e4;
      color: #121826;
      background: #fff;
    }
  `;
  document.head.appendChild(style);

  function updateButton(button) {
    const isDark = document.documentElement.dataset.theme === "dark";
    button.textContent = isDark ? "☀" : "☾";
    button.setAttribute("aria-label", isDark ? "화이트 모드로 전환" : "블랙 모드로 전환");
    button.title = isDark ? "화이트 모드" : "블랙 모드";
  }

  function mountThemeToggle() {
    const nav = document.querySelector(".nav-actions");
    if (!nav || nav.querySelector(".theme-toggle")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    updateButton(button);
    button.addEventListener("click", function () {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch (error) {
        // Theme switching still works when storage is blocked.
      }
      updateButton(button);
    });

    const anchor = nav.querySelector(".login-link, .outline-btn");
    nav.insertBefore(button, anchor || null);
  }

  function normalizeNavigationLabels() {
    const labels = {
      "beginner.html": "튜토리얼",
      "beginner-2.html": "개초급",
      "intermediate.html": "어나더 중급",
      "advanced-2xl.html": "2XL상급",
    };

    document.querySelectorAll(".nav-actions a[href]").forEach(function (link) {
      const path = link.getAttribute("href").split("?")[0].split("#")[0];
      if (labels[path]) link.textContent = labels[path];
    });
  }

  function initializeSharedNavigation() {
    normalizeNavigationLabels();
    mountThemeToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSharedNavigation, { once: true });
  } else {
    initializeSharedNavigation();
  }
})();
