/* ==========================================
   Topic Page JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initQA();
    initProgress();
    initCompleteButton();
});

// ==========================================
// Q&A Toggle
// ==========================================

function initQA() {
    const qaItems = document.querySelectorAll('.qa-item');

    qaItems.forEach(item => {
        const question = item.querySelector('.qa-question');

        question.addEventListener('click', () => {
            // Close other open items
            qaItems.forEach(other => {
                if (other !== item && other.classList.contains('active')) {
                    other.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            updateProgress();
        });
    });
}

// ==========================================
// Practice Problem Solutions
// ==========================================

function toggleSolution(button) {
    const solution = button.nextElementSibling;
    solution.classList.toggle('hidden');
    button.textContent = solution.classList.contains('hidden') ? 'Show Solution' : 'Hide Solution';
    updateProgress();
}

// ==========================================
// Progress Tracking
// ==========================================

function initProgress() {
    updateProgress();
}

function updateProgress() {
    const topicId = getTopicId();
    const viewedQAs = document.querySelectorAll('.qa-item.active').length;
    const totalQAs = document.querySelectorAll('.qa-item').length;
    const viewedSolutions = document.querySelectorAll('.solution:not(.hidden)').length;
    const totalSolutions = document.querySelectorAll('.solution').length;

    const total = totalQAs + totalSolutions;
    const viewed = viewedQAs + viewedSolutions;
    const percentage = total > 0 ? Math.round((viewed / total) * 100) : 0;

    // Update UI
    const progressText = document.getElementById('progress-text');
    const progressFill = document.getElementById('progress-fill');

    if (progressText) progressText.textContent = `${percentage}% Complete`;
    if (progressFill) progressFill.style.width = `${percentage}%`;

    // Save progress
    saveProgress(topicId, { viewedQAs, viewedSolutions, percentage });
}

function getTopicId() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    return filename.replace('.html', '');
}

function saveProgress(topicId, data) {
    try {
        const progress = JSON.parse(localStorage.getItem('prepHub_topicProgress') || '{}');
        progress[topicId] = data;
        localStorage.setItem('prepHub_topicProgress', JSON.stringify(progress));
    } catch (e) {
        console.warn('Could not save progress:', e);
    }
}

function loadProgress(topicId) {
    try {
        const progress = JSON.parse(localStorage.getItem('prepHub_topicProgress') || '{}');
        return progress[topicId] || { percentage: 0 };
    } catch (e) {
        return { percentage: 0 };
    }
}

// ==========================================
// Complete Button
// ==========================================

function initCompleteButton() {
    const btn = document.getElementById('mark-complete');
    if (!btn) return;

    const topicId = getTopicId();
    const isCompleted = isTopicCompleted(topicId);

    if (isCompleted) {
        btn.classList.add('completed');
        btn.innerHTML = '<span class="check-icon">✓</span> Completed!';
    }

    btn.addEventListener('click', () => {
        toggleTopicComplete(topicId);

        if (isTopicCompleted(topicId)) {
            btn.classList.add('completed');
            btn.innerHTML = '<span class="check-icon">✓</span> Completed!';
            showConfetti();
        } else {
            btn.classList.remove('completed');
            btn.innerHTML = '<span class="check-icon">✓</span> Mark Topic as Complete';
        }
    });
}

function isTopicCompleted(topicId) {
    try {
        const completed = JSON.parse(localStorage.getItem('prepHub_completedTopics') || '[]');
        return completed.includes(topicId);
    } catch (e) {
        return false;
    }
}

function toggleTopicComplete(topicId) {
    try {
        let completed = JSON.parse(localStorage.getItem('prepHub_completedTopics') || '[]');
        const index = completed.indexOf(topicId);

        if (index > -1) {
            completed.splice(index, 1);
        } else {
            completed.push(topicId);
        }

        localStorage.setItem('prepHub_completedTopics', JSON.stringify(completed));
    } catch (e) {
        console.warn('Could not save completion:', e);
    }
}

// ==========================================
// Confetti Animation
// ==========================================

function showConfetti() {
    const colors = ['#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#10b981'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -10px;
            border-radius: 2px;
            pointer-events: none;
            z-index: 9999;
            animation: confetti-fall ${2 + Math.random() * 2}s linear forwards;
            transform: rotate(${Math.random() * 360}deg);
        `;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }

    // Add animation if not exists
    if (!document.getElementById('confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes confetti-fall {
                to {
                    top: 100vh;
                    transform: rotate(${360 + Math.random() * 360}deg) translateX(${Math.random() * 100 - 50}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Syntax highlighting removed - using CSS-based approach instead

