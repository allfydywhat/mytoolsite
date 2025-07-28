// Tasbih Counter JavaScript with Auto-Save Functionality

let count = 0;
const STORAGE_KEY = 'tasbih-counter';

// DOM Elements
const counterDisplay = document.getElementById('counter-number');
const decreaseBtn = document.getElementById('decrease-btn');
const resetDialog = document.getElementById('reset-dialog');

// Initialize counter on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCount();
    updateDisplay();
    updateDecreaseButton();
});

// Load count from localStorage
function loadCount() {
    const savedCount = localStorage.getItem(STORAGE_KEY);
    if (savedCount !== null) {
        count = parseInt(savedCount, 10);
        if (isNaN(count) || count < 0) {
            count = 0;
        }
    }
}

// Save count to localStorage
function saveCount() {
    try {
        localStorage.setItem(STORAGE_KEY, count.toString());
        showAutoSaveIndicator();
    } catch (error) {
        console.error('Failed to save count:', error);
    }
}

// Update counter display
function updateDisplay() {
    counterDisplay.textContent = count.toLocaleString();
}

// Update decrease button state
function updateDecreaseButton() {
    decreaseBtn.disabled = count === 0;
}

// Show auto-save indicator animation
function showAutoSaveIndicator() {
    const indicator = document.querySelector('.auto-save-indicator');
    indicator.style.opacity = '1';
    indicator.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
        indicator.style.opacity = '0.7';
        indicator.style.transform = 'scale(1)';
    }, 200);
}

// Increase count function
function increaseCount() {
    count++;
    updateDisplay();
    updateDecreaseButton();
    saveCount();
    
    // Add visual feedback
    const tapBtn = document.getElementById('tap-btn');
    tapBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        tapBtn.style.transform = 'scale(1)';
    }, 100);
}

// Decrease count function
function decreaseCount() {
    if (count > 0) {
        count--;
        updateDisplay();
        updateDecreaseButton();
        saveCount();
        
        // Add visual feedback
        decreaseBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            decreaseBtn.style.transform = 'scale(1)';
        }, 100);
    }
}

// Show reset confirmation dialog
function showResetDialog() {
    resetDialog.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Focus trap for accessibility
    const confirmBtn = resetDialog.querySelector('.btn-confirm');
    confirmBtn.focus();
}

// Hide reset confirmation dialog
function hideResetDialog() {
    resetDialog.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Confirm reset
function confirmReset() {
    count = 0;
    updateDisplay();
    updateDecreaseButton();
    saveCount();
    hideResetDialog();
    
    // Show reset animation
    counterDisplay.style.transform = 'scale(1.1)';
    counterDisplay.style.color = '#10b981';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
        counterDisplay.style.color = 'white';
    }, 300);
}

// Cancel reset
function cancelReset() {
    hideResetDialog();
}

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Prevent shortcuts when dialog is open
    if (resetDialog.style.display === 'flex') {
        if (event.key === 'Escape') {
            cancelReset();
        } else if (event.key === 'Enter') {
            confirmReset();
        }
        return;
    }
    
    switch(event.key) {
        case ' ':
        case 'Enter':
            event.preventDefault();
            increaseCount();
            break;
        case 'ArrowDown':
        case 'Backspace':
            event.preventDefault();
            decreaseCount();
            break;
        case 'r':
        case 'R':
            if (event.ctrlKey || event.metaKey) {
                event.preventDefault();
                showResetDialog();
            }
            break;
        case 'Escape':
            if (resetDialog.style.display === 'flex') {
                cancelReset();
            }
            break;
    }
});

// Touch/Click event optimizations for mobile
let touchStartTime = 0;
const tapBtn = document.getElementById('tap-btn');

tapBtn.addEventListener('touchstart', function(e) {
    touchStartTime = Date.now();
    e.preventDefault();
}, { passive: false });

tapBtn.addEventListener('touchend', function(e) {
    const touchDuration = Date.now() - touchStartTime;
    if (touchDuration < 500) { // Prevent accidental long presses
        increaseCount();
    }
    e.preventDefault();
}, { passive: false });

// Prevent double-tap zoom on mobile
tapBtn.addEventListener('touchend', function(e) {
    e.preventDefault();
}, { passive: false });

// Close dialog when clicking outside
resetDialog.addEventListener('click', function(e) {
    if (e.target === resetDialog) {
        cancelReset();
    }
});

// Auto-save indicator styling
const autoSaveIndicator = document.querySelector('.auto-save-indicator');
if (autoSaveIndicator) {
    autoSaveIndicator.style.transition = 'all 0.2s ease';
}

// Performance optimization: Debounce save function for rapid clicks
let saveTimeout;
function debouncedSave() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(saveCount, 100);
}

// Error handling for localStorage
function handleStorageError() {
    console.warn('localStorage is not available. Count will not be saved.');
    const indicator = document.querySelector('.auto-save-indicator');
    if (indicator) {
        indicator.innerHTML = '<div class="save-dot" style="background: #ef4444;"></div><span style="color: #ef4444;">Save unavailable</span>';
    }
}

// Check localStorage availability
try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
} catch (error) {
    handleStorageError();
}

// Visibility API to save when page becomes hidden
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        saveCount();
    }
});

// Save before page unload
window.addEventListener('beforeunload', function() {
    saveCount();
});

// Initialize tooltips for accessibility
function initializeAccessibility() {
    const tapBtn = document.getElementById('tap-btn');
    const decreaseBtn = document.getElementById('decrease-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    tapBtn.setAttribute('title', 'Click or press Space/Enter to increase count');
    decreaseBtn.setAttribute('title', 'Click or press Backspace/Arrow Down to decrease count');
    resetBtn.setAttribute('title', 'Click or press Ctrl+R to reset counter');
}

// Initialize accessibility features
initializeAccessibility();