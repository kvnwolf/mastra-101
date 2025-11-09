# Mastra 101

This repository contains code created while following the [Mastra Course](https://mastra.ai/course), an interactive guide to building AI agents with Mastra, the open-source AI Agent framework built in TypeScript.

## What is Mastra?

[Mastra](https://github.com/mastra-ai/mastra) is an open-source AI Agent Framework for TypeScript that includes all the basic primitives for AI engineering:

- **Agents** with tools, memory, and tracing
- **State-machine based workflows**
- **Evals** for tracking and measuring AI output
- **Storage** for RAG pipelines
- **Local development playground**

## Project Overview

This project demonstrates building a **Financial Assistant Agent** that:

- Analyzes transaction data from Google Sheets
- Provides insights about spending patterns
- Answers questions about specific transactions
- Maintains conversation memory across interactions
- Uses custom tools for data retrieval

## Key Features Implemented

### 1. Financial Agent
- Well-structured system prompt with clear role definition
- Professional and friendly communication style
- Focused on transaction data analysis

### 2. Custom Tools
- `getTransactions` - Fetches transaction data from a public Google Sheet
- Configured to work with both OpenAI and Anthropic models

### 3. Memory Integration
- Persistent conversation history using LibSQL
- Maintains context across multiple interactions
- Enables more natural, contextual responses

### 4. Vercel AI Gateway Integration
- Configured to use Vercel AI Gateway for model routing
- Supports multiple AI providers (OpenAI, Anthropic, Google)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- Bun package manager

### Installation

```bash
bun run setup
```

### Development

Start the Mastra Studio playground:

```bash
bun run dev
```

Then open [http://localhost:4111](http://localhost:4111) to interact with your agent.

## Course Progress

This repository represents completion of:
- ✅ Lesson 1: Build Your First Agent

## Resources

- [Mastra Documentation](https://mastra.ai/docs)
- [Mastra Course](https://mastra.ai/course)
- [Mastra GitHub Repository](https://github.com/mastra-ai/mastra)
- [Vercel AI SDK](https://ai-sdk.dev)

## License

MIT

## Acknowledgments

Built while following the excellent [Mastra Course](https://mastra.ai/course). Thanks to the Mastra team for creating such a comprehensive learning resource!
