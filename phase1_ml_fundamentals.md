# Phase 1: ML/DL Fundamentals Cheat Sheet

Quick reference for interview questions. Master these concepts!

---

## 1. Bias-Variance Tradeoff

```
Total Error = Bias² + Variance + Irreducible Error
```

| Concept | Meaning | Sign |
|---------|---------|------|
| **High Bias** | Model too simple, underfitting | Low train & test accuracy |
| **High Variance** | Model too complex, overfitting | High train, low test accuracy |
| **Sweet Spot** | Balanced complexity | Similar train & test accuracy |

**Interview Q**: "How do you know if your model is overfitting?"
> Compare training vs validation loss. Large gap = overfitting.

---

## 2. Loss Functions

### Regression
| Loss | Formula | When to Use |
|------|---------|-------------|
| MSE | `(y - ŷ)²` | General regression |
| MAE | `|y - ŷ|` | Robust to outliers |
| Huber | Combo of MSE & MAE | Best of both |

### Classification
| Loss | When to Use |
|------|-------------|
| Binary Cross-Entropy | Binary classification |
| Categorical CE | Multi-class (one-hot) |
| Sparse Cat. CE | Multi-class (integer labels) |
| Focal Loss | Imbalanced classes |

**Interview Q**: "Why use Focal Loss in object detection?"
> Down-weights easy examples, focuses on hard negatives. Used in RetinaNet.

---

## 3. Optimizers

| Optimizer | Key Idea | Best For |
|-----------|----------|----------|
| **SGD** | Basic gradient descent | Simple, with momentum |
| **Adam** | Adaptive LR + momentum | Default choice, most cases |
| **AdamW** | Adam + weight decay fix | Transformers, LLMs |
| **RMSprop** | Adaptive LR per param | RNNs |

**Interview Q**: "Why Adam over SGD?"
> Adam adapts learning rate per parameter, converges faster, less hyperparameter tuning.

---

## 4. Regularization

| Technique | Effect | Use Case |
|-----------|--------|----------|
| **L1 (Lasso)** | Sparse weights (some → 0) | Feature selection |
| **L2 (Ridge)** | Small weights (all shrink) | Prevent overfitting |
| **Dropout** | Random neuron deactivation | Deep networks |
| **Early Stopping** | Stop when val loss increases | All models |
| **Data Augmentation** | Artificially expand dataset | Images, NLP |
| **Batch Normalization** | Normalize layer outputs | Faster training |

**Interview Q**: "L1 vs L2 regularization?"
> L1 → sparse (feature selection), L2 → small weights (general regularization)

---

## 5. Evaluation Metrics

### Classification
```
Precision = TP / (TP + FP)    → "Of predicted positives, how many correct?"
Recall    = TP / (TP + FN)    → "Of actual positives, how many found?"
F1        = 2 * P * R / (P + R) → Harmonic mean
```

| Metric | When to Prioritize |
|--------|-------------------|
| **Precision** | False positives costly (spam detection) |
| **Recall** | False negatives costly (cancer detection) |
| **AUC-ROC** | Overall model ranking ability |
| **F1** | Balanced importance |

### Object Detection
| Metric | Meaning |
|--------|---------|
| **IoU** | Intersection over Union (overlap) |
| **mAP** | Mean Average Precision across classes |
| **mAP@0.5** | mAP at IoU threshold 0.5 |
| **mAP@0.5:0.95** | Average mAP across IoU 0.5 to 0.95 |

---

## 6. Train/Val/Test Split

| Split | Purpose | Typical % |
|-------|---------|-----------|
| Training | Model learns patterns | 70-80% |
| Validation | Hyperparameter tuning | 10-15% |
| Test | Final unbiased evaluation | 10-15% |

### Cross-Validation
- **K-Fold**: Split into K parts, train on K-1, validate on 1, rotate
- **Stratified K-Fold**: Maintains class distribution (for imbalanced data)
- **Time Series CV**: No shuffle, respect temporal order

**Interview Q**: "When not to use random shuffle for CV?"
> Time series data – would cause data leakage from future to past.

---

## 7. Handling Imbalanced Data

| Technique | How It Works |
|-----------|--------------|
| **Oversampling (SMOTE)** | Generate synthetic minority samples |
| **Undersampling** | Remove majority samples |
| **Class Weights** | Penalize majority class errors less |
| **Focal Loss** | Down-weight easy examples |
| **Threshold Tuning** | Adjust classification threshold |

**Interview Q**: "How did you handle class imbalance in defect detection?"
> Used class weights + focal loss + data augmentation for rare defect types.

---

## 8. Feature Engineering

| Technique | Description |
|-----------|-------------|
| **Normalization** | Scale to [0,1] |
| **Standardization** | Mean=0, Std=1 |
| **Log Transform** | For skewed distributions |
| **Binning** | Continuous → categorical |
| **One-Hot Encoding** | Categorical → binary vectors |
| **Target Encoding** | Category → mean of target |
| **Feature Crossing** | Combine features (A × B) |

---

## 9. Common Interview Questions

1. **Explain gradient descent.**
> Iteratively update weights in direction of steepest loss reduction: `w = w - lr * ∇L`

2. **What is backpropagation?**
> Chain rule to compute gradients from output to input layers.

3. **Vanishing gradient problem?**
> Gradients → 0 in deep networks with sigmoid. Solution: ReLU, ResNets, LSTMs.

4. **Batch size effects?**
> Large batch = stable gradients, faster. Small batch = regularization effect, more noise.

5. **Why normalize inputs?**
> Faster convergence, prevents features with large values from dominating.

---

## Quick Revision Checklist

- [ ] Can explain bias-variance tradeoff with examples
- [ ] Know when to use which loss function
- [ ] Can compare optimizers (SGD vs Adam)
- [ ] Understand L1 vs L2 regularization
- [ ] Can calculate Precision, Recall, F1 manually
- [ ] Know mAP calculation for object detection
- [ ] Can explain train/val/test split purpose
- [ ] Know 3+ techniques for imbalanced data
- [ ] Can describe 5+ feature engineering techniques
