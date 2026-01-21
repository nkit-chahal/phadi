/* ==========================================
   Ankit's Interview Prep Hub - Application Logic
   ========================================== */

// ==========================================
// Data: DSA Problems
// ==========================================

const dsaProblems = {
    arrays: [
        { id: 1, title: "Two Sum", difficulty: "easy", leetcode: 1 },
        { id: 2, title: "Best Time to Buy and Sell Stock", difficulty: "easy", leetcode: 121 },
        { id: 3, title: "Contains Duplicate", difficulty: "easy", leetcode: 217 },
        { id: 4, title: "Product of Array Except Self", difficulty: "medium", leetcode: 238 },
        { id: 5, title: "Maximum Subarray", difficulty: "medium", leetcode: 53 },
        { id: 6, title: "Merge Intervals", difficulty: "medium", leetcode: 56 },
        { id: 7, title: "3Sum", difficulty: "medium", leetcode: 15 },
        { id: 8, title: "Rotate Array", difficulty: "medium", leetcode: 189 },
        { id: 9, title: "Valid Anagram", difficulty: "easy", leetcode: 242 },
        { id: 10, title: "Longest Substring Without Repeating", difficulty: "medium", leetcode: 3 },
        { id: 11, title: "Group Anagrams", difficulty: "medium", leetcode: 49 },
        { id: 12, title: "Find All Duplicates", difficulty: "medium", leetcode: 442 },
        { id: 13, title: "Move Zeroes", difficulty: "easy", leetcode: 283 },
        { id: 14, title: "Container With Most Water", difficulty: "medium", leetcode: 11 },
        { id: 15, title: "Spiral Matrix", difficulty: "medium", leetcode: 54 }
    ],
    hashmap: [
        { id: 16, title: "Valid Anagram", difficulty: "easy", leetcode: 242 },
        { id: 17, title: "First Unique Character", difficulty: "easy", leetcode: 387 },
        { id: 18, title: "Intersection of Two Arrays II", difficulty: "easy", leetcode: 350 },
        { id: 19, title: "Top K Frequent Elements", difficulty: "medium", leetcode: 347 },
        { id: 20, title: "Subarray Sum Equals K", difficulty: "medium", leetcode: 560 },
        { id: 21, title: "Longest Consecutive Sequence", difficulty: "medium", leetcode: 128 },
        { id: 22, title: "Word Pattern", difficulty: "easy", leetcode: 290 },
        { id: 23, title: "Happy Number", difficulty: "easy", leetcode: 202 },
        { id: 24, title: "LRU Cache", difficulty: "medium", leetcode: 146 },
        { id: 25, title: "Copy List with Random Pointer", difficulty: "medium", leetcode: 138 }
    ],
    twopointer: [
        { id: 26, title: "Valid Palindrome", difficulty: "easy", leetcode: 125 },
        { id: 27, title: "Two Sum II", difficulty: "medium", leetcode: 167 },
        { id: 28, title: "3Sum", difficulty: "medium", leetcode: 15 },
        { id: 29, title: "Remove Duplicates from Sorted Array", difficulty: "easy", leetcode: 26 },
        { id: 30, title: "Trapping Rain Water", difficulty: "hard", leetcode: 42 },
        { id: 31, title: "Maximum Average Subarray I", difficulty: "easy", leetcode: 643 },
        { id: 32, title: "Minimum Window Substring", difficulty: "hard", leetcode: 76 },
        { id: 33, title: "Longest Repeating Character Replacement", difficulty: "medium", leetcode: 424 },
        { id: 34, title: "Permutation in String", difficulty: "medium", leetcode: 567 },
        { id: 35, title: "Sliding Window Maximum", difficulty: "hard", leetcode: 239 }
    ],
    trees: [
        { id: 36, title: "Maximum Depth of Binary Tree", difficulty: "easy", leetcode: 104 },
        { id: 37, title: "Invert Binary Tree", difficulty: "easy", leetcode: 226 },
        { id: 38, title: "Validate BST", difficulty: "medium", leetcode: 98 },
        { id: 39, title: "Level Order Traversal", difficulty: "medium", leetcode: 102 },
        { id: 40, title: "Lowest Common Ancestor", difficulty: "medium", leetcode: 236 },
        { id: 41, title: "Binary Tree from Preorder/Inorder", difficulty: "medium", leetcode: 105 },
        { id: 42, title: "Kth Smallest Element in BST", difficulty: "medium", leetcode: 230 },
        { id: 43, title: "Serialize and Deserialize BT", difficulty: "hard", leetcode: 297 }
    ],
    dp: [
        { id: 44, title: "Climbing Stairs", difficulty: "easy", leetcode: 70 },
        { id: 45, title: "House Robber", difficulty: "medium", leetcode: 198 },
        { id: 46, title: "Coin Change", difficulty: "medium", leetcode: 322 },
        { id: 47, title: "Longest Increasing Subsequence", difficulty: "medium", leetcode: 300 },
        { id: 48, title: "Unique Paths", difficulty: "medium", leetcode: 62 }
    ],
    sql: [
        { id: 49, title: "Combine Two Tables", difficulty: "easy", leetcode: 175 },
        { id: 50, title: "Second Highest Salary", difficulty: "medium", leetcode: 176 },
        { id: 51, title: "Nth Highest Salary", difficulty: "medium", leetcode: 177 },
        { id: 52, title: "Duplicate Emails", difficulty: "easy", leetcode: 182 },
        { id: 53, title: "Employees Earning More", difficulty: "easy", leetcode: 181 },
        { id: 54, title: "Department Highest Salary", difficulty: "medium", leetcode: 184 },
        { id: 55, title: "Rank Scores", difficulty: "medium", leetcode: 178 },
        { id: 56, title: "Consecutive Numbers", difficulty: "medium", leetcode: 180 },
        { id: 57, title: "Delete Duplicate Emails", difficulty: "easy", leetcode: 196 },
        { id: 58, title: "Rising Temperature", difficulty: "easy", leetcode: 197 }
    ]
};

// ==========================================
// Data: ML Concepts
// ==========================================

const mlConcepts = [
    {
        icon: "⚖️",
        title: "Bias-Variance Tradeoff",
        description: "High bias = underfitting, High variance = overfitting. Balance complexity for optimal generalization.",
        topicPage: "topic-bias-variance.html"
    },
    {
        icon: "📉",
        title: "Loss Functions",
        description: "MSE, MAE for regression. Cross-entropy, Focal Loss for classification. Choose based on task.",
        topicPage: "topic-loss-functions.html"
    },
    {
        icon: "🔄",
        title: "Optimizers",
        description: "SGD, Adam, AdamW, RMSprop. Adam is default, AdamW for transformers.",
        topicPage: "topic-optimizers.html"
    },
    {
        icon: "🛡️",
        title: "Regularization",
        description: "L1 (sparse), L2 (shrink), Dropout, Early Stopping. Prevent overfitting.",
        topicPage: "topic-regularization.html"
    },
    {
        icon: "📊",
        title: "Evaluation Metrics",
        description: "Precision, Recall, F1, AUC-ROC for classification. mAP, IoU for detection.",
        topicPage: "topic-evaluation-metrics.html"
    },
    {
        icon: "✂️",
        title: "Train/Val/Test Split",
        description: "70-15-15 typical. K-Fold CV for small data. Stratified for imbalanced.",
        topicPage: "topic-data-splits.html"
    },
    {
        icon: "⚖️",
        title: "Imbalanced Data",
        description: "SMOTE, undersampling, class weights, focal loss. Multiple techniques together.",
        topicPage: "topic-imbalanced-data.html"
    },
    {
        icon: "🔧",
        title: "Feature Engineering",
        description: "Normalization, encoding, binning, feature crossing. Domain knowledge matters.",
        topicPage: "topic-feature-engineering.html"
    }
];

// ==========================================
// Data: GenAI Topics
// ==========================================

const genaiTopics = [
    {
        icon: "🔍",
        title: "RAG Architecture",
        content: "Your strongest skill! End-to-end retrieval augmented generation.",
        topicPage: "topic-rag-architecture.html",
        points: [
            "Chunking strategies (recursive, semantic)",
            "Embedding models (OpenAI, Sentence-BERT)",
            "Vector DBs (ChromaDB, Pinecone, FAISS)",
            "Hybrid retrieval + reranking"
        ]
    },
    {
        icon: "💾",
        title: "Vector Databases",
        content: "Storage and retrieval of embeddings for similarity search.",
        topicPage: "topic-vector-databases.html",
        points: [
            "ChromaDB - lightweight, easy local dev",
            "Pinecone - managed, scalable",
            "FAISS - fast, open-source",
            "Qdrant - modern, performant"
        ]
    },
    {
        icon: "✍️",
        title: "Prompt Engineering",
        content: "Craft effective prompts for optimal LLM outputs.",
        topicPage: "topic-prompt-engineering.html",
        points: [
            "Be specific with instructions",
            "Few-shot examples for complex tasks",
            "Chain of thought reasoning",
            "Output format constraints"
        ]
    },
    {
        icon: "🛡️",
        title: "LLM Guardrails",
        content: "Safety and evaluation for production LLMs.",
        topicPage: "topic-llm-guardrails.html",
        points: [
            "Hallucination prevention",
            "Input validation & PII filtering",
            "RAGAS for RAG evaluation",
            "Human-in-the-loop for critical decisions"
        ]
    },
    {
        icon: "🔗",
        title: "LangChain",
        content: "Framework for building LLM applications.",
        topicPage: "topic-langchain.html",
        points: [
            "Chains for sequential operations",
            "Agents for dynamic tool use",
            "Memory for conversation history",
            "Output parsers for structured data"
        ]
    },
    {
        icon: "⚡",
        title: "Fine-tuning vs RAG",
        content: "When to use which approach.",
        topicPage: "topic-finetuning-vs-rag.html",
        points: [
            "Fine-tune for custom style/format",
            "RAG for dynamic knowledge",
            "RAG is cheaper, easier to update",
            "Often combine both approaches"
        ]
    }
];

// ==========================================
// Data: System Design Topics
// ==========================================

const systemDesignTopics = [
    {
        icon: "🎯",
        title: "ML System Design Framework",
        content: "Structured approach to tackle any ML system design question.",
        topicPage: "topic-ml-design-framework.html",
        points: [
            "Problem → Metrics → Data → Model → Serve → Monitor",
            "Clarify requirements & constraints",
            "Always discuss trade-offs"
        ]
    },
    {
        icon: "🔄",
        title: "ML Pipeline Architecture",
        content: "End-to-end pipeline from data to deployment.",
        topicPage: "topic-ml-pipeline.html",
        points: [
            "Data ingestion & validation",
            "Feature store & versioning",
            "Training & evaluation pipeline",
            "CI/CD for ML (MLOps)"
        ]
    },
    {
        icon: "🚀",
        title: "Model Serving & Inference",
        content: "Deploying models at scale with low latency.",
        topicPage: "topic-model-serving.html",
        points: [
            "Batch vs real-time inference",
            "Model optimization (quantization, distillation)",
            "A/B testing & canary deployments",
            "Autoscaling & load balancing"
        ]
    },
    {
        icon: "📈",
        title: "Recommendation Systems",
        content: "Design personalized recommendation engines.",
        topicPage: "topic-recsys-design.html",
        points: [
            "Collaborative filtering vs content-based",
            "Two-tower embeddings",
            "Real-time ranking pipeline",
            "Cold start problem"
        ]
    },
    {
        icon: "🔍",
        title: "Search & Ranking",
        content: "Design search systems with ML ranking.",
        topicPage: "topic-search-ranking.html",
        points: [
            "Query understanding & expansion",
            "Retrieval → Ranking → Reranking",
            "Learning to Rank (LTR)",
            "Semantic search with embeddings"
        ]
    },
    {
        icon: "📊",
        title: "Data Infrastructure",
        content: "Scalable data systems for ML workloads.",
        topicPage: "topic-data-infra.html",
        points: [
            "Feature stores (Feast, Tecton)",
            "Data lakes vs warehouses",
            "Stream processing for real-time",
            "Data quality & monitoring"
        ]
    }
];

// ==========================================
// Data: Behavioral Stories (STAR Format)
// ==========================================

const stories = [
    {
        company: "T",
        companyName: "Trident",
        title: "VIS Platform v1 → v2 Upgrade",
        role: "Lead Developer",
        impact: "40% efficiency gain",
        star: {
            situation: "Legacy VIS platform couldn't handle multi-camera streams or integrate with PLCs.",
            task: "Lead the complete architecture redesign for v2.0 with real-time capabilities.",
            action: "Architected parallel streaming, redesigned annotation engine, integrated industrial hardware.",
            result: "Deployed to 3 manufacturing lines, 40% efficiency improvement, 100 parts/min throughput."
        }
    },
    {
        company: "T",
        companyName: "Trident",
        title: "RAG-based Breakdown Intelligence",
        role: "AI Architect",
        impact: "30% faster resolution",
        star: {
            situation: "Operators spent hours diagnosing machine breakdowns, relying on tribal knowledge.",
            task: "Build an AI system to surface historical solutions from 5 years of breakdown logs.",
            action: "Implemented RAG with ChromaDB, Azure OpenAI, hybrid retrieval, confidence scoring.",
            result: "30% reduction in resolution time, improved operator trust with explainable suggestions."
        }
    },
    {
        company: "L",
        companyName: "Lincode",
        title: "Real-time Defect Detection",
        role: "ML Engineer",
        impact: "0.95 mAP achieved",
        star: {
            situation: "Manual quality inspection causing bottlenecks, missing subtle defects.",
            task: "Deploy real-time CV system on industrial inspection lines.",
            action: "Trained YOLOv5, optimized for 40ms inference, containerized with FastAPI on AWS.",
            result: "0.95 mAP, 40ms latency, deployed on LIVIS platform with NGINX load balancing."
        }
    },
    {
        company: "A",
        companyName: "AgriWatch",
        title: "LLM-powered Market Reports",
        role: "Data Scientist",
        impact: "70% effort reduction",
        star: {
            situation: "Manual financial market reporting consuming significant analyst time.",
            task: "Automate report generation while maintaining quality and accuracy.",
            action: "Designed LLM API pipeline for market summaries with validation checks.",
            result: "70% reduction in manual effort, improved report consistency and speed."
        }
    }
];

// ==========================================
// Data: Flashcards for Quick Practice
// ==========================================

const flashcards = [
    { q: "What is the bias-variance tradeoff?", a: "Total Error = Bias² + Variance + Irreducible Error. High bias = underfitting, High variance = overfitting." },
    { q: "When to use L1 vs L2 regularization?", a: "L1 (Lasso) → sparse features (feature selection). L2 (Ridge) → small weights (general regularization)." },
    { q: "What is RAG?", a: "Retrieval-Augmented Generation. Grounds LLM responses in external knowledge, reduces hallucinations." },
    { q: "How do you prevent LLM hallucinations?", a: "Constrain to retrieved context, lower temperature, require citations, confidence thresholds, human-in-loop." },
    { q: "What is mAP in object detection?", a: "Mean Average Precision across classes. Calculated using precision-recall curve at various IoU thresholds." },
    { q: "Adam vs SGD optimizer?", a: "Adam adapts learning rate per parameter, converges faster, less hyperparameter tuning needed." },
    { q: "How to handle imbalanced data?", a: "SMOTE, undersampling, class weights, focal loss, threshold tuning. Often combine multiple techniques." },
    { q: "What is the purpose of validation set?", a: "Hyperparameter tuning without overfitting to test set. Test set is for final unbiased evaluation only." },
    { q: "Explain chunking in RAG?", a: "Split documents into smaller pieces. Balance: too small = lost context, too large = noise. 500-1000 tokens typical." },
    { q: "Fine-tuning vs RAG - when to use which?", a: "Fine-tune for custom output style. RAG for knowledge that changes. Often combine both." }
];

// ==========================================
// State Management
// ==========================================

class AppState {
    constructor() {
        this.completedProblems = this.loadFromStorage('completedProblems', []);
        this.masteredConcepts = this.loadFromStorage('masteredConcepts', []);
        this.streakDays = this.loadFromStorage('streakDays', 0);
        this.lastVisit = this.loadFromStorage('lastVisit', null);
        this.currentCategory = 'arrays';
        this.currentFlashcardIndex = 0;

        this.updateStreak();
    }

    loadFromStorage(key, defaultValue) {
        try {
            const stored = localStorage.getItem(`prepHub_${key}`);
            return stored ? JSON.parse(stored) : defaultValue;
        } catch {
            return defaultValue;
        }
    }

    saveToStorage(key, value) {
        try {
            localStorage.setItem(`prepHub_${key}`, JSON.stringify(value));
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
    }

    updateStreak() {
        const today = new Date().toDateString();
        if (this.lastVisit !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (this.lastVisit === yesterday.toDateString()) {
                this.streakDays++;
            } else if (this.lastVisit !== null) {
                this.streakDays = 1;
            } else {
                this.streakDays = 1;
            }

            this.lastVisit = today;
            this.saveToStorage('lastVisit', this.lastVisit);
            this.saveToStorage('streakDays', this.streakDays);
        }
    }

    toggleProblem(id) {
        const index = this.completedProblems.indexOf(id);
        if (index > -1) {
            this.completedProblems.splice(index, 1);
        } else {
            this.completedProblems.push(id);
        }
        this.saveToStorage('completedProblems', this.completedProblems);
    }

    toggleConcept(index) {
        const idx = this.masteredConcepts.indexOf(index);
        if (idx > -1) {
            this.masteredConcepts.splice(idx, 1);
        } else {
            this.masteredConcepts.push(index);
        }
        this.saveToStorage('masteredConcepts', this.masteredConcepts);
    }

    getTotalProblems() {
        return Object.values(dsaProblems).flat().length;
    }

    getOverallProgress() {
        const totalProblems = this.getTotalProblems();
        const totalConcepts = mlConcepts.length;
        const total = totalProblems + totalConcepts;
        const completed = this.completedProblems.length + this.masteredConcepts.length;
        return Math.round((completed / total) * 100);
    }
}

// ==========================================
// UI Renderer
// ==========================================

class UIRenderer {
    constructor(state) {
        this.state = state;
    }

    renderStats() {
        document.getElementById('overall-progress').textContent = `${this.state.getOverallProgress()}%`;
        document.getElementById('problems-solved').textContent = `${this.state.completedProblems.length}/${this.state.getTotalProblems()}`;
        document.getElementById('concepts-mastered').textContent = `${this.state.masteredConcepts.length}/${mlConcepts.length}`;
        document.getElementById('streak-days').textContent = this.state.streakDays;
    }

    renderProblems(category) {
        const container = document.getElementById('problems-container');
        const problems = dsaProblems[category] || [];

        container.innerHTML = problems.map(problem => {
            const isCompleted = this.state.completedProblems.includes(problem.id);
            return `
                <div class="problem-card ${isCompleted ? 'completed' : ''}" data-id="${problem.id}">
                    <div class="problem-header">
                        <div>
                            <div class="problem-title">${problem.title}</div>
                            <div class="problem-meta">
                                <span class="difficulty-badge ${problem.difficulty}">${problem.difficulty}</span>
                                <span class="problem-number">LC #${problem.leetcode}</span>
                            </div>
                        </div>
                        <div class="problem-checkbox ${isCompleted ? 'checked' : ''}" data-id="${problem.id}"></div>
                    </div>
                </div>
            `;
        }).join('');

        // Add click handlers
        container.querySelectorAll('.problem-checkbox').forEach(checkbox => {
            checkbox.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(checkbox.dataset.id);
                this.state.toggleProblem(id);
                this.renderProblems(this.state.currentCategory);
                this.renderStats();
            });
        });

        container.querySelectorAll('.problem-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                const problem = problems.find(p => p.id === id);
                if (problem) {
                    window.open(`https://leetcode.com/problems/${problem.title.toLowerCase().replace(/\s+/g, '-')}/`, '_blank');
                }
            });
        });
    }

    renderConcepts() {
        const container = document.getElementById('ml-concepts');

        container.innerHTML = mlConcepts.map((concept, index) => {
            const isMastered = this.state.masteredConcepts.includes(index);
            const progress = isMastered ? 100 : 0;

            return `
                <div class="concept-card" data-index="${index}">
                    <div class="concept-icon">${concept.icon}</div>
                    <div class="concept-title">${concept.title}</div>
                    <div class="concept-description">${concept.description}</div>
                    <div class="concept-progress">
                        <div class="concept-progress-bar" style="width: ${progress}%"></div>
                    </div>
                    <div class="concept-actions">
                        <a href="${concept.topicPage}" class="view-topic-btn">📖 View Details</a>
                        <button class="mark-mastered-btn ${isMastered ? 'mastered' : ''}" data-index="${index}">
                            ${isMastered ? '✓ Mastered' : 'Mark Complete'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        container.querySelectorAll('.mark-mastered-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const index = parseInt(btn.dataset.index);
                this.state.toggleConcept(index);
                this.renderConcepts();
                this.renderStats();
            });
        });
    }

    renderGenAI() {
        const container = document.getElementById('genai-container');

        container.innerHTML = genaiTopics.map(topic => `
            <div class="genai-card">
                <div class="genai-card-header">
                    <div class="genai-card-icon">${topic.icon}</div>
                    <div class="genai-card-title">${topic.title}</div>
                </div>
                <div class="genai-card-content">
                    <p>${topic.content}</p>
                    <ul>
                        ${topic.points.map(point => `<li>${point}</li>`).join('')}
                </ul>
                </div>
                <div class="genai-card-footer">
                    <a href="${topic.topicPage}" class="view-topic-btn">📖 View Details</a>
                </div>
            </div>
        `).join('');
    }

    renderSystemDesign() {
        const container = document.getElementById('systemdesign-container');

        container.innerHTML = systemDesignTopics.map(topic => `
            <div class="genai-card">
                <div class="genai-card-header">
                    <div class="genai-card-icon">${topic.icon}</div>
                    <div class="genai-card-title">${topic.title}</div>
                </div>
                <div class="genai-card-content">
                    <p>${topic.content}</p>
                    <ul>
                        ${topic.points.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
                <div class="genai-card-footer">
                    <a href="${topic.topicPage}" class="view-topic-btn">📖 View Details</a>
                </div>
            </div>
        `).join('');
    }

    renderStories() {
        const container = document.getElementById('stories-container');

        container.innerHTML = stories.map(story => `
            <div class="story-card">
                <div class="story-header">
                    <div class="story-company">
                        <div class="company-logo">${story.company}</div>
                        <div>
                            <div class="story-title">${story.title}</div>
                            <div class="story-role">${story.companyName} • ${story.role}</div>
                        </div>
                    </div>
                    <div class="story-impact">${story.impact}</div>
                </div>
                <div class="story-content">
                    <div class="star-section">
                        <div class="star-label">Situation</div>
                        <div class="star-text">${story.star.situation}</div>
                    </div>
                    <div class="star-section">
                        <div class="star-label">Task</div>
                        <div class="star-text">${story.star.task}</div>
                    </div>
                    <div class="star-section">
                        <div class="star-label">Action</div>
                        <div class="star-text">${story.star.action}</div>
                    </div>
                    <div class="star-section">
                        <div class="star-label">Result</div>
                        <div class="star-text">${story.star.result}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderFlashcard(index) {
        const card = flashcards[index];
        const modalContent = document.getElementById('modal-content');

        modalContent.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
                    Card ${index + 1} of ${flashcards.length}
                </div>
                <div class="flashcard-question" style="font-size: 1.2rem; font-weight: 600; margin-bottom: 24px; color: var(--accent-primary);">
                    ${card.q}
                </div>
                <div class="flashcard-answer" style="display: none; padding: 20px; background: rgba(99, 102, 241, 0.1); border-radius: 12px; font-size: 1rem; line-height: 1.6;">
                    ${card.a}
                </div>
                <button id="reveal-answer" class="btn btn-primary" style="margin-top: 16px;">
                    Reveal Answer
                </button>
            </div>
        `;

        document.getElementById('reveal-answer').addEventListener('click', function () {
            document.querySelector('.flashcard-answer').style.display = 'block';
            this.style.display = 'none';
        });
    }
}

// ==========================================
// App Initialization
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const state = new AppState();
    const ui = new UIRenderer(state);

    // Initial render
    ui.renderStats();
    ui.renderProblems('arrays');
    ui.renderConcepts();
    ui.renderGenAI();
    ui.renderSystemDesign();
    ui.renderStories();

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentCategory = btn.dataset.category;
            ui.renderProblems(btn.dataset.category);
        });
    });

    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Modal handling
    const modalOverlay = document.getElementById('modal-overlay');
    const fab = document.getElementById('quick-practice');
    const modalClose = document.getElementById('modal-close');
    const prevCard = document.getElementById('prev-card');
    const nextCard = document.getElementById('next-card');

    fab.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        ui.renderFlashcard(state.currentFlashcardIndex);
    });

    modalClose.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });

    prevCard.addEventListener('click', () => {
        state.currentFlashcardIndex = (state.currentFlashcardIndex - 1 + flashcards.length) % flashcards.length;
        ui.renderFlashcard(state.currentFlashcardIndex);
    });

    nextCard.addEventListener('click', () => {
        state.currentFlashcardIndex = (state.currentFlashcardIndex + 1) % flashcards.length;
        ui.renderFlashcard(state.currentFlashcardIndex);
    });

    // Keyboard navigation for flashcards
    document.addEventListener('keydown', (e) => {
        if (modalOverlay.classList.contains('active')) {
            if (e.key === 'ArrowLeft') prevCard.click();
            if (e.key === 'ArrowRight') nextCard.click();
            if (e.key === 'Escape') modalClose.click();
            if (e.key === ' ') {
                e.preventDefault();
                const revealBtn = document.getElementById('reveal-answer');
                if (revealBtn) revealBtn.click();
            }
        }
    });

    console.log('🚀 PrepHub initialized! Good luck with your interviews, Ankit!');
});
