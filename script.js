/* ============================================================================
   KODNEST PREMIUM BUILD SYSTEM - SCRIPT
   Interactive functionality for the design system
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function() {
  initializeInteractions();
});

/**
 * Initialize all interactive elements on the page
 */
function initializeInteractions() {
  setupCopyButton();
  setupCheckboxes();
  setupFormFocus();
}

/**
 * Setup copy button functionality
 */
function setupCopyButton() {
  const copyButtons = document.querySelectorAll('.copy-box .btn--secondary');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const textToCopy = this.parentElement.querySelector('.copy-box__text').textContent;
      copyToClipboard(textToCopy);
      
      // Feedback
      const originalText = this.textContent;
      this.textContent = 'Copied';
      setTimeout(() => {
        this.textContent = originalText;
      }, 2000);
    });
  });
}

/**
 * Copy text to clipboard with fallback
 */
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

/**
 * Fallback copy method for older browsers
 */
function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

/**
 * Setup checkbox interactions
 */
function setupCheckboxes() {
  const checkboxes = document.querySelectorAll('[type="checkbox"]');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const label = this.closest('label');
      if (label) {
        // Optional: Add visual feedback
        label.style.opacity = this.checked ? '0.7' : '1';
      }
    });
  });
}

/**
 * Setup input focus states for better UX
 */
function setupFormFocus() {
  const inputs = document.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      // Focus state is handled by CSS
      console.log('Input focused:', this);
    });
    
    input.addEventListener('blur', function() {
      console.log('Input blurred:', this);
    });
  });
}

/**
 * Utility: Log design system token usage (development only)
 */
function logDesignTokens() {
  const tokens = {
    colors: {
      background: '#F7F6F3',
      primaryText: '#111111',
      accent: '#8B0000',
      success: '#4A7C59',
      warning: '#B8860B'
    },
    spacing: {
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '40px',
      xl: '64px'
    },
    typography: {
      serif: 'EB Garamond',
      sans: 'Inter'
    },
    transitions: {
      standard: '150ms ease-in-out',
      slow: '200ms ease-in-out'
    }
  };
  
  console.log('KodNest Premium Design System Tokens:', tokens);
}

// Optionally log tokens in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  logDesignTokens();
}
