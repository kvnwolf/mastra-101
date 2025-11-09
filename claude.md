# Project Context: Mastra 101

## Overview

This is a learning project created while following the [Mastra Course](https://mastra.ai/course). The goal is to learn how to build AI agents using Mastra, an open-source AI Agent framework for TypeScript.

## Current State

### Completed
- ✅ Lesson 1: Build Your First Agent

### Project Structure
```
src/mastra/
├── agents/
│   └── financial-agent.ts          # Main agent with system prompt
├── tools/
│   └── get-transactions-tool.ts    # Custom tool for Google Sheets data
├── lib/
│   └── utils.ts                    # toMultiline utility
└── index.ts                        # Mastra configuration
```

## Key Technologies

- **Mastra**: AI Agent framework
- **Vercel AI Gateway**: Model routing (OpenAI, Anthropic, Google)
- **LibSQL**: Memory storage
- **Bun**: Package manager
- **TypeScript**: Language

## Important Notes

### Current Agent Configuration
- **Model**: Anthropic Claude Haiku 4.5 (via Vercel AI Gateway)
- **System Prompt**: Simple plain text format using `toMultiline` utility
- **Tools**: getTransactions (with Anthropic-compatible empty input schema)
- **Memory**: Enabled with LibSQL file storage

### Special Considerations

#### Anthropic Tool Calling
- Anthropic models require at least one property in tool input schemas
- Empty objects `z.object({})` cause validation errors
- Use dummy optional field: `z.object({ _: z.literal("").optional() })`

#### Prompt Engineering
- Current approach: Simple plain text with section headers (ROLE DEFINITION, CORE CAPABILITIES, etc.)
- Using `toMultiline` utility for clean code formatting

## Maintenance Instructions

### Documentation Updates
**IMPORTANT**: You MUST keep BOTH `claude.md` and `readme.md` updated as the project progresses:

#### Update `claude.md` (this file):
- Update "Current State" → "Completed" section when finishing lessons
- Update "Current Agent Configuration" when changing models or settings
- Add new sections under "Special Considerations" for important learnings
- Update "Project Structure" if the folder structure changes

#### Update `readme.md`:
- When completing new lessons, update the "Course Progress" section
- Add new features to "Key Features Implemented"
- Keep installation/usage instructions current

### When Adding New Features
1. Implement the feature
2. Update `claude.md` with technical context and special considerations
3. Update `readme.md` with user-facing capability description
4. Test in Mastra Studio playground

## Development Workflow

1. **Start playground**: `bun run dev`
2. **Access studio**: http://localhost:4111
3. **Test agents**: Use the Chat interface
4. **Check tools**: Use the Tools tab
5. **View memory**: Use the Memory tab

## Resources

- [Mastra Docs](https://mastra.ai/docs)
- [Mastra Course](https://mastra.ai/course)
- [Anthropic Prompt Engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Vercel AI SDK Docs](https://ai-sdk.dev)
