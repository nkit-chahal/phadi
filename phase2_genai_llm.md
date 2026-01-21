# Phase 2: GenAI & LLM Interview Prep

Your strongest differentiator! Master these topics.

---

## 1. RAG Architecture (End-to-End)

```
┌─────────────┐    ┌───────────────┐    ┌──────────────┐
│  Documents  │───▶│  Chunking &   │───▶│   Vector DB  │
│  (PDFs, etc)│    │  Embedding    │    │  (ChromaDB)  │
└─────────────┘    └───────────────┘    └──────────────┘
                                               │
        ┌──────────────────────────────────────┘
        ▼
┌─────────────┐    ┌───────────────┐    ┌──────────────┐
│   Query     │───▶│   Retrieval   │───▶│     LLM      │
│             │    │   + Reranking │    │   Response   │
└─────────────┘    └───────────────┘    └──────────────┘
```

### Key Components

| Component | Options | Your Experience |
|-----------|---------|-----------------|
| **Chunking** | Fixed size, semantic, recursive | ✓ |
| **Embedding** | OpenAI Ada, Sentence-BERT, Cohere | ✓ |
| **Vector DB** | ChromaDB, Pinecone, FAISS, Weaviate | ChromaDB ✓ |
| **Retrieval** | Similarity search, hybrid (BM25 + dense) | ✓ |
| **Reranking** | Cross-encoders, Cohere rerank | ✓ |

**Interview Q**: "How did you implement RAG for breakdown data?"
> Used recursive chunking on historical breakdown logs, embedded with OpenAI, stored in ChromaDB, retrieved top-k similar issues with reranking, fed to GPT-4 for resolution suggestions. Reduced resolution time by 30%.

---

## 2. Vector Databases

| DB | Pros | Cons |
|----|------|------|
| **ChromaDB** | Easy setup, good for dev | Not for massive scale |
| **Pinecone** | Managed, scalable | Paid, vendor lock-in |
| **FAISS** | Fast, open-source | No persistence by default |
| **Weaviate** | Hybrid search | More complex setup |
| **Qdrant** | Modern, performant | Newer ecosystem |

**Interview Q**: "Why ChromaDB over Pinecone?"
> Lightweight, no vendor lock-in, sufficient for our scale (~50K documents), easy local development.

---

## 3. Prompt Engineering

### Best Practices
1. **Be specific**: Clear instructions, expected output format
2. **Few-shot examples**: Provide examples for complex tasks
3. **Chain of thought**: "Think step by step"
4. **Role prompting**: "You are an expert ML engineer..."
5. **Output constraints**: "Respond in JSON format"

### Prompt Templates
```python
# System prompt
system = """You are an industrial expert analyzing breakdown data.
Provide concise, actionable recommendations in JSON format:
{"issue": "", "root_cause": "", "solution": "", "priority": ""}"""

# User prompt with context
user = f"""Historical similar issues:
{retrieved_context}

Current breakdown report:
{current_issue}

Analyze and recommend solution."""
```

---

## 4. LLM Evaluation & Guardrails

### Evaluation Metrics
| Metric | Purpose |
|--------|---------|
| **BLEU/ROUGE** | Text similarity (old, limited) |
| **BERTScore** | Semantic similarity |
| **G-Eval** | LLM-as-judge |
| **RAGAS** | RAG-specific (faithfulness, relevance) |
| **Human Eval** | Gold standard |

### Guardrails
- **Input validation**: Block PII, prompt injection
- **Output filtering**: Toxicity, hallucination detection
- **Rate limiting**: Prevention of abuse
- **Monitoring**: Log all inputs/outputs for audit

**Interview Q**: "How do you prevent hallucinations?"
> 1) Constrain to retrieved context, 2) Lower temperature, 3) Citation requirements, 4) Confidence scoring, 5) Human-in-the-loop for critical decisions.

---

## 5. Fine-tuning vs RAG

| Aspect | Fine-tuning | RAG |
|--------|-------------|-----|
| **When to use** | Task-specific style/format | Knowledge augmentation |
| **Data needed** | Thousands of examples | Documents as-is |
| **Update ease** | Retrain model | Just update docs |
| **Cost** | Higher (compute) | Lower (inference) |
| **Hallucination** | Can still hallucinate | Grounded in docs |

**Interview Q**: "When would you fine-tune vs use RAG?"
> Fine-tune for custom output style (e.g., company tone). RAG for knowledge that changes (docs, policies). Often combine both.

---

## 6. LangChain Concepts

```python
# Basic RAG with LangChain
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.chains import RetrievalQA
from langchain.llms import AzureChatOpenAI

# Setup
embeddings = OpenAIEmbeddings()
vectorstore = Chroma(embedding_function=embeddings)
retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

# Chain
qa_chain = RetrievalQA.from_chain_type(
    llm=AzureChatOpenAI(),
    retriever=retriever,
    return_source_documents=True
)
```

### Key LangChain Components
- **Chains**: Sequential operations
- **Agents**: Dynamic tool selection
- **Memory**: Conversation history
- **Callbacks**: Logging, streaming
- **Output Parsers**: Structured outputs

---

## 7. Common Interview Questions

1. **What is RAG and why use it?**
> Retrieval-Augmented Generation. Grounds LLM responses in external knowledge, reduces hallucinations, keeps info up-to-date without retraining.

2. **How do you choose chunk size?**
> Balance: Too small = lost context, too large = noise. Typically 500-1000 tokens with 100-200 overlap. Test empirically.

3. **Explain embedding models.**
> Convert text to dense vectors capturing semantic meaning. Similar texts → similar vectors. Used for similarity search.

4. **What is temperature in LLMs?**
> Controls randomness. 0 = deterministic, 1 = creative. Use low for factual, high for creative tasks.

5. **How do you handle context window limits?**
> Summarization, chunking, map-reduce patterns, or use models with larger context (GPT-4 128K, Claude 200K).

---

## 8. Your Project Talking Points

### RAG-based Breakdown Intelligence (Trident)
- **Problem**: Manual breakdown analysis taking hours
- **Solution**: RAG over 5 years of breakdown logs
- **Stack**: ChromaDB + Azure OpenAI + LangChain
- **Impact**: 30% reduction in resolution time
- **Challenges**: Noisy data, multilingual logs, operator trust

### Key Technical Decisions
- Chose ChromaDB for simplicity
- Hybrid retrieval (keyword + semantic)
- Confidence thresholds to flag uncertain recommendations
- Human-in-the-loop for critical decisions

---

## Quick Revision Checklist

- [ ] Can explain RAG architecture end-to-end
- [ ] Know 3+ vector databases with pros/cons
- [ ] Can write effective prompts with few-shot examples
- [ ] Understand LLM evaluation metrics
- [ ] Know fine-tuning vs RAG trade-offs
- [ ] Can explain LangChain components
- [ ] Ready with RAG project story (STAR format)
