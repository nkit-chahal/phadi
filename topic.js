/* ==========================================
   Topic Page JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initQA();
    initProgress();
    initCompleteButton();
    highlightCode();
    initCopyButtons();
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

// ==========================================
// Copy to Clipboard
// ==========================================

function initCopyButtons() {
    const codeExamples = document.querySelectorAll('.code-example pre');

    codeExamples.forEach(pre => {
        // Create Button
        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.innerHTML = `
            <span class="copy-icon">📋</span>
            <span class="btn-text">Copy</span>
        `;

        pre.appendChild(button);

        button.addEventListener('click', async () => {
            const code = pre.querySelector('code').textContent;

            try {
                await navigator.clipboard.writeText(code);

                // Success State
                button.classList.add('copied');
                button.querySelector('.btn-text').textContent = 'Copied!';
                button.querySelector('.copy-icon').textContent = '✅';

                setTimeout(() => {
                    button.classList.remove('copied');
                    button.querySelector('.btn-text').textContent = 'Copy';
                    button.querySelector('.copy-icon').textContent = '📋';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
            }
        });
    });
}

// ==========================================
// Syntax Highlighting
// ==========================================

function highlightCode() {
    const codeBlocks = document.querySelectorAll('code[class^="language-"]');

    codeBlocks.forEach(block => {
        let text = block.textContent;

        // Simple Regex-based highlighting for Python/JS
        const rules = [
            { regex: /(#.*$)/gm, class: 'comment' }, // Comments
            { regex: /("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*')/g, class: 'string' }, // Strings
            { regex: /\b(def|class|if|else|elif|for|while|return|import|from|as|with|try|except|finally|pass|in|is|not|and|or|lambda|yield|async|await)\b/g, class: 'keyword' }, // Keywords
            { regex: /\b(None|True|False|self|cls)\b/g, class: 'builtin' }, // Special builtins
            { regex: /\b(\d+)\b/g, class: 'number' }, // Numbers
            { regex: /\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\()/g, class: 'function' }, // Functions
            { regex: /(@[a-zA-Z_][a-zA-Z0-9_]*)/g, class: 'decorator' }, // Decorators
            { regex: /[+\-*\/=<>!&|%^~]/g, class: 'operator' } // Operators
        ];

        let html = text;

        // We'll process carefully to avoid nesting issues
        // This is a naive but effective one-pass approach for simple snippets
        rules.forEach(rule => {
            html = html.replace(rule.regex, (match) => {
                // If it's already inside a span, don't wrap it again
                // (Very simplified check for this implementation)
                return `<span class="token ${rule.class}">${match}</span>`;
            });
        });

        // Note: The above naive replace might break if strings contain keywords.
        // For a more robust version, we'd tokenise. But for these prep materials,
        // we'll use a slightly safer replacement strategy.

        // Let's use a more robust version to avoid double wrapping
        block.innerHTML = robustHighlight(text);
    });
}

function robustHighlight(text) {
    // 1. Strings and Comments first (they are "containers")
    const containers = [];
    let processed = text.replace(/("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*'|#.*$)/gm, (match) => {
        const id = `__CONT_${containers.length}__`;
        containers.push({ id, content: match, type: match.startsWith('#') ? 'comment' : 'string' });
        return id;
    });

    // 2. Other tokens - Using capturing groups to safely replace
    processed = processed
        .replace(/\b(def|class|if|else|elif|import|from|as|with|try|except|finally|pass|in|is|not|and|or|lambda|yield|async|await)\b/g, '<span class="token keyword">$1</span>')
        .replace(/\b(return|for|while|break|continue)\b/g, '<span class="token control">$1</span>')
        .replace(/\b(None|True|False|self|cls)\b/g, '<span class="token builtin">$1</span>')
        .replace(/\b(\d+)\b/g, '<span class="token number">$1</span>')
        .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\()/g, '<span class="token function">$1</span>')
        .replace(/(@[a-zA-Z_][a-zA-Z0-9_]*)/g, '<span class="token decorator">$1</span>')
        .replace(/([+\-*\/=<>!&|%^~])/g, '<span class="token operator">$1</span>');

    // 3. Put containers back
    containers.forEach(item => {
        processed = processed.replace(item.id, `<span class="token ${item.type}">${item.content}</span>`);
    });

    return processed;
}

// ==========================================
// Confetti Animation
// ==========================================

