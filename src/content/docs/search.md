---
title: Search Directory
template: splash
description: Search the full documentation archive instantly.
editUrl: false
lastUpdated: false
---

<div class="search-loader">
  <p>Opening documentation search index...</p>
  <div class="spinner"></div>
</div>

<script is:inline>
  // Wait for the page DOM to fully load in the browser
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Locate Starlight's native search button component
    const nativeSearchButton = document.querySelector('button[data-open-modal="search"]');
    
    if (nativeSearchButton) {
      // 2. Automatically trigger the modal open animation
      nativeSearchButton.click();
      
      // 3. Look for a search query (?q=something) in the URL
      const urlParams = new URLSearchParams(window.location.search);
      const searchQuery = urlParams.get('q');
      
      if (searchQuery) {
        // Wait a brief split-second for the modal overlay to finish rendering
        setTimeout(() => {
          const searchInput = document.querySelector('#starlight__search input');
          if (searchInput) {
            searchInput.value = searchQuery;
            searchInput.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }, 150);
      }
    }
  });
</script>

<style>
  /* Center the loading text and spinner on the splash canvas */
  .search-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 25vh;
    gap: 1rem;
    text-align: center;
  }
  .spinner {
    width: 36px;
    height: 36px;
    border: 4px solid var(--sl-color-gray-5);
    border-top: 4px solid var(--sl-color-accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>