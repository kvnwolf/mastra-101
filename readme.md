# Mastra 101

This repository contains code created while following the [Mastra Course](https://mastra.ai/course), an interactive guide to building AI agents with Mastra, the open-source AI Agent framework built in TypeScript.

**Note:** The code in this repository has been adapted from the original course to build a Personal Assistant Agent that better fits my needs, rather than following the tutorial exactly as written.

## What is Mastra?

[Mastra](https://github.com/mastra-ai/mastra) is an open-source AI Agent Framework for TypeScript that includes all the basic primitives for AI engineering:

- **Agents** with tools, memory, and tracing
- **State-machine based workflows**
- **Evals** for tracking and measuring AI output
- **Storage** for RAG pipelines
- **Local development playground**

## Project Overview

This project demonstrates building a **Personal Assistant Agent** that:

- Manages Google Calendar events (create, update, delete, search)
- Checks calendar availability and schedule conflicts
- Provides summaries of upcoming events
- Maintains conversation memory across interactions
- Uses MCP (Model Context Protocol) for tool integration

## Key Features Implemented

### 1. Personal Assistant Agent
- Well-structured system prompt with clear role definition
- Professional and friendly communication style
- Focused on calendar management and productivity

### 2. MCP Integration (Zapier)
- Connected to Zapier MCP server for external tool access
- Google Calendar integration with 12+ actions
- Streamable HTTP transport for modern communication

### 3. Advanced Memory System
- **Storage**: LibSQL for persistent conversation history
- **Vector Store**: LibSQL Vector for semantic search
- **Embeddings**: OpenAI text-embedding-3-small via Vercel AI Gateway
- **Conversation History**: Keeps last 20 messages in context
- **Semantic Recall**: Finds top 3 relevant past conversations using similarity search
- **Working Memory**: Remembers user information (name, preferences, interests, conversation style)
- All memory features are scoped per thread (conversation)

### 4. Vercel AI Gateway Integration
- Configured to use Vercel AI Gateway for model routing
- Currently using Anthropic Claude Haiku 4.5

## Getting Started

### Prerequisites

- Node.js 18.x or later
- Bun package manager

### Installation

```bash
bun run setup
```

### Environment Variables

Create a `.env.local` file with the following variables:

```bash
AI_GATEWAY_API_KEY=your_vercel_ai_gateway_key
ZAPIER_MCP_URL=your_zapier_mcp_url
```

To get your Zapier MCP URL:
1. Visit [Zapier MCP](https://zapier.com/mcp)
2. Create a new MCP server
3. Connect Google Calendar (or other apps)
4. Copy your MCP server URL

### Development

Start the Mastra Studio playground:

```bash
bun run dev
```

Then open [http://localhost:4111](http://localhost:4111) to interact with your agent.

## Project Structure

```
src/mastra/
├── agents/
│   └── personal-assistant.ts       # Personal assistant with MCP integration
├── lib/
│   └── utils.ts                    # toMultiline utility
└── index.ts                        # Mastra configuration
```

## Technologies Used

- **Mastra** - AI Agent framework
- **MCP (Model Context Protocol)** - Integration with external tools via Zapier
- **Vercel AI Gateway** - Model routing (Anthropic Claude Haiku 4.5)
- **LibSQL** - Memory storage and vector search
- **Zapier** - MCP server providing Google Calendar integration
- **Bun** - Package manager
- **TypeScript** - Language

## Course Progress

- ✅ **Lesson 1**: Build Your First Agent
- ✅ **Lesson 2**: Agent Tools - MCP

> See [CLAUDE.md](./claude.md) for technical implementation details and development notes.

## Resources

- [Mastra Documentation](https://mastra.ai/docs)
- [Mastra Course](https://mastra.ai/course)
- [Mastra GitHub Repository](https://github.com/mastra-ai/mastra)
- [Vercel AI SDK](https://ai-sdk.dev)

## License

MIT
