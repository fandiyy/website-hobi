// Create Preloader HTML with Loading Circle Animation
function createPreloader() {
  const preloaderHTML = `
    <div id="preloader" class="preloader-container">
      <style>
        .preloader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          flex-direction: column;
          gap: 40px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          opacity: 1;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .preloader-container.fade-out {
          opacity: 0;
          pointer-events: none;
          animation: fadeOutPreloader 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes fadeOutPreloader {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .loading-circle {
          width: 80px;
          height: 80px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circle-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid transparent;
          border-top-color: #1f3a93;
          border-right-color: #ff6b35;
          border-radius: 50%;
          animation: spin 2s linear infinite;
        }

        .circle-ring:nth-child(2) {
          width: 60px;
          height: 60px;
          top: 10px;
          left: 10px;
          border-top-color: #ff6b35;
          border-right-color: #1f3a93;
          animation: spin 2s linear infinite reverse;
        }

        .circle-dot {
          width: 12px;
          height: 12px;
          background: #1f3a93;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(31, 58, 147, 0.7);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(31, 58, 147, 0);
          }
        }

        .loading-text {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .loading-text::after {
          content: '';
          animation: dotAnimation 1.5s steps(4, end) infinite;
        }

        @keyframes dotAnimation {
          0%, 20% {
            content: '';
          }
          40% {
            content: '.';
          }
          60% {
            content: '..';
          }
          80%, 100% {
            content: '...';
          }
        }

        @media (max-width: 768px) {
          .loading-circle {
            width: 70px;
            height: 70px;
          }

          .circle-ring {
            border-width: 3px;
          }

          .circle-ring:nth-child(2) {
            width: 50px;
            height: 50px;
            top: 10px;
            left: 10px;
          }

          .loading-text {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .preloader-container {
            gap: 30px;
          }

          .loading-circle {
            width: 60px;
            height: 60px;
          }

          .circle-ring {
            border-width: 3px;
          }

          .circle-ring:nth-child(2) {
            width: 42px;
            height: 42px;
            top: 9px;
            left: 9px;
          }

          .loading-text {
            font-size: 14px;
          }
        }
      </style>
      <div class="loading-circle">
        <div class="circle-ring"></div>
        <div class="circle-ring"></div>
        <div class="circle-dot"></div>
      </div>
      <div class="loading-text">Memuat</div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', preloaderHTML);
}

// Global state untuk preloader
let preloaderState = {
  isVisible: false,
  isRemoving: false,
  hideTimeout: null
};

// Initialize Preloader
function initPreloader() {
  // Jika preloader sudah ada, gunakan yang lama
  let preloaderElement = document.getElementById('preloader');
  
  if (!preloaderElement) {
    createPreloader();
    preloaderElement = document.getElementById('preloader');
  }
  
  // Reset state
  preloaderState.isVisible = true;
  preloaderState.isRemoving = false;
  
  // Tampilkan preloader
  preloaderElement.classList.remove('fade-out');
  preloaderElement.style.display = 'flex';

  // Function to remove preloader smoothly
  function removePreloader() {
    if (preloaderState.isRemoving) return;
    preloaderState.isRemoving = true;
    preloaderState.isVisible = false;

    preloaderElement.classList.add('fade-out');

    setTimeout(() => {
      if (preloaderElement && preloaderElement.parentNode) {
        preloaderElement.style.display = 'none';
      }
    }, 600);
  }

  // Auto-remove after 3 seconds
  preloaderState.hideTimeout = setTimeout(() => {
    if (!preloaderState.isRemoving && preloaderState.isVisible) {
      removePreloader();
    }
  }, 3000);

  // Remove when page fully loads
  const onPageLoad = () => {
    if (!preloaderState.isRemoving && preloaderState.isVisible) {
      setTimeout(removePreloader, 300);
    }
  };

  window.addEventListener('load', onPageLoad, { once: true });

  // Fallback: Remove after max 5 seconds
  setTimeout(() => {
    if (!preloaderState.isRemoving && preloaderState.isVisible && preloaderElement && preloaderElement.parentNode) {
      removePreloader();
    }
  }, 5000);
}

// Tunjukkan preloader saat halaman akan di-navigate
function showPreloaderOnNavigation() {
  // Tangkap link clicks
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    
    if (!link) return;
    
    const href = link.getAttribute('href');
    
    // Jangan tampilkan preloader untuk link eksternal
    if (link.target === '_blank' || link.rel.includes('external')) {
      return;
    }
    
    // Tampilkan preloader untuk semua link (termasuk anchor links #)
    if (href && href !== '#') {
      initPreloader();
    }
  }, true);

  // Tampilkan preloader saat form submit
  document.addEventListener('submit', function(e) {
    const form = e.target;
    if (!form.target || form.target !== '_blank') {
      initPreloader();
    }
  }, true);

  // Tampilkan preloader saat back/forward browser
  window.addEventListener('beforeunload', function() {
    if (preloaderState.isVisible && !preloaderState.isRemoving) {
      initPreloader();
    }
  });

  // Handle browser back/forward
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      // Page was restored from bfcache
      initPreloader();
      // Hapus preloader setelah halaman fully loaded
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader && preloaderState.isVisible) {
          preloader.classList.add('fade-out');
          setTimeout(() => {
            preloader.style.display = 'none';
            preloaderState.isVisible = false;
          }, 600);
        }
      }, 800);
    }
  });

  // Handle F5 refresh
  window.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
      initPreloader();
    }
  });
}

// Start preloader immediately when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      initPreloader();
      showPreloaderOnNavigation();
    }, 0);
  });
} else {
  // If DOM is already loaded, still initialize
  initPreloader();
  showPreloaderOnNavigation();
}