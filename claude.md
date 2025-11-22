# Project Context: Mastra 101

## Overview

Learning project following the [Mastra Course](https://mastra.ai/course). Code adapted to build a Personal Assistant Agent.

> **For setup and public documentation**, see [README.md](./readme.md)

## Current State

### Completed Lessons
- ✅ Lesson 1: Build Your First Agent
- ✅ Lesson 2: Agent Tools - MCP

## Important Notes

### Current Agent Configuration
- **Agent Name**: Personal Assistant
- **Model**: Anthropic Claude Haiku 4.5 (via Vercel AI Gateway)
- **System Prompt**: Plain text format using `toMultiline` utility, includes sections for role, capabilities, memory usage, and behavioral guidelines
- **Tools**: MCP tools from Zapier (Google Calendar with 12+ actions)
- **Memory**: Advanced configuration with:
  - **Storage**: LibSQL for conversation history
  - **Vector Store**: LibSQL Vector for semantic search
  - **Embedder**: OpenAI text-embedding-3-small via Vercel AI Gateway
  - **lastMessages**: 20 (keeps last 20 messages in context)
  - **semanticRecall**: Top 3 relevant conversations with 2 before/1 after context
  - **workingMemory**: Structured template for user info (name, preferences, interests, style)
- **MCP Configuration**: Connected to Zapier MCP server via Streamable HTTP

### Special Considerations

#### MCP (Model Context Protocol)
- Using `@mastra/mcp` package for MCP integration
- Connected to Zapier MCP server for external tools
- Google Calendar integration provides calendar management capabilities
- MCP URL stored securely in `.env.local` as `ZAPIER_MCP_URL`
- Transport method: Streamable HTTP (modern, recommended)

#### Anthropic Tool Calling
- Anthropic models require at least one property in tool input schemas
- Empty objects `z.object({})` cause validation errors
- Use dummy optional field: `z.object({ _: z.literal("").optional() })`

#### Prompt Engineering
- Current approach: Simple plain text with section headers (ROLE DEFINITION, CORE CAPABILITIES, etc.)
- Using `toMultiline` utility for clean code formatting
- Prompt structured for calendar management and productivity tasks
- Includes MEMORY CAPABILITIES section to guide agent on using memory features

#### Advanced Memory Features
- **Semantic Recall**: Uses embeddings to find similar past conversations
  - Embeddings generated via Vercel AI Gateway (OpenAI text-embedding-3-small)
  - No separate OpenAI API key needed - uses existing `AI_GATEWAY_API_KEY`
  - Vector similarity search powered by LibSQL Vector
- **Working Memory**: XML-style structured template for user information
  - Template uses `toMultiline` utility for clean formatting
  - Agent automatically updates user info when learned in conversation
- **Memory Scope**: All memory features are scoped per thread
  - New threads start with empty working memory
  - Semantic recall searches only within current thread by default
  - Can be changed to `global` scope to search across all threads
- **Memory in System Prompt**: Agent instructions explicitly mention memory capabilities
  - Tells agent when to update working memory
  - Encourages personalized responses based on stored information

## Maintenance Instructions

### Documentation Strategy
**No duplications** - Each piece of information lives in one place:

- **README.md**: Public documentation (setup, features, resources)
- **CLAUDE.md**: Technical context (configuration, special considerations, workflow)

#### Update `claude.md` (this file):
- Update "Completed Lessons" when finishing lessons
- Update "Current Agent Configuration" when changing models/settings
- Add new "Special Considerations" for important technical learnings
- Reference README.md instead of duplicating

#### Update `readme.md`:
- Update "Course Progress" and "Key Features" when completing lessons
- Keep setup/installation instructions current
- Add new technologies to "Technologies Used"
- Reference CLAUDE.md for technical details

### When Adding New Features
1. Implement the feature
2. Update `claude.md` with technical context and special considerations
3. Update `readme.md` with user-facing capability description
4. Test in Mastra Studio playground
5. Commit and push changes after completing each lesson

## Development Workflow

1. **Start playground**: `bun run dev`
2. **Access studio**: http://localhost:4111
3. **Test agents**: Use the Chat interface
4. **Check tools**: Use the Tools tab
5. **View memory**: Use the Memory tab
6. **After completing a lesson**: Commit and push changes to maintain git history

> **Additional Resources**: See [README.md](./readme.md#resources)
