# Windows native latest candidate failure: 2.1.201

- Run: https://github.com/RomeGe/claude-code-zh-cn/actions/runs/28776591681
- Head SHA: `72315ce54c4d22add62a299af56b386d5f4c5511`
- Status: `fail`
- Candidate kind: `native`
- Native: `win32-x64` / `ok` / `ok` / `ok`
- Display audit: `fail` (7 issues / 11 commands)

## What Failed

- Candidate verification did not pass: `status=fail`.
- Display audit did not pass: `status=fail`.
- Summary: pass=0, fail=1, skip=0.

## Display Audit Issues

- `top_help_line_156` (`top_help`, display-untranslated-line)

  ```text
  gateway [options]                     Run the enterprise auth/telemetry
  ```

- `plugin_help_line_12` (`plugin_help`, display-untranslated-line)

  ```text
  eval [options] [target]              Run eval cases (evals/**/case.yaml or
  ```

- `plugin_help_line_13` (`plugin_help`, display-untranslated-line)

  ```text
  evals/**/prompt.md + graders/*.md)
  ```

- `plugin_help_line_14` (`plugin_help`, display-untranslated-line)

  ```text
  against a plugin and report scored
  ```

- `plugin_help_line_15` (`plugin_help`, display-untranslated-line)

  ```text
  results. Target is a path, a plugin name,
  ```

- `plugin_help_line_17` (`plugin_help`, display-untranslated-line)

  ```text
  and skills-dir plugins both resolve (and
  ```

- `plugin_help_line_18` (`plugin_help`, display-untranslated-line)

  ```text
  add a no-plugin baseline arm)
  ```

## Text Diff Excerpt

```markdown
# Upstream text diff: 2.1.190 -> 2.1.201

- Added upstream strings: 21101
- Removed upstream strings: 14689
- Already covered by translations: 134
- Needs translation review: 20967
- Sensitive review hints: 258

## Added strings needing review
- __*` tools are, use those instead (they reach the same Claude Design API). If neither is available, tell the user to run `/design login` and stop \u2014 do not guess at Claude Design behaviour without the tools.
- __Host-gw_dev
- __idx_${...}
- __manual__
- __orphan_summary
- __readyz_probe__
- __remote-workflow
- __wRg$
- _tagName
- - **id**: Task identifier (use with TaskGet, TaskUpdate)
- - ${...} at ${...}${...}
- - Affects multiple files, user should approve the approach ### BAD - Don't use EnterPlanMode: User:
- - Architectural decision on theme system, affects many components User:
- - Before assigning tasks to teammates, to see what's available
- - could use Redis, in-memory, file-based, etc. - Example:
- - e.g.
- - Example:
- - Include enough detail in the description for another agent to understand and complete the task - New tasks are created with status 'pending' and no owner - use TaskUpdate with the `owner` parameter to assign them
- - Line ${...}
- - many optimization strategies possible 3. **Code Modifications**: Changes that affect existing behavior or structure - Example:
- - Multiple approaches possible, need to profile first, significant impact User:
- - need to profile and identify bottlenecks - Example:
- - Network latency: ${...}ms (${...}%)
- - Pre-request overhead: ${...}ms (${...}%)
- - Redux vs Context vs custom solution 5. **Multi-File Changes**: The task will likely touch more than 2-3 files - Example:
- - Requires architectural decisions (session vs JWT, where to store tokens, middleware structure) User:
- - Seems simple but involves: where to place it, confirmation dialog, API call, error handling, state updates User:
- - Simple, obvious implementation User:
- - Stops a running background task by its ID - Takes a task_id parameter identifying the task to stop - To stop an agent-team teammate, pass its agent ID ("name@team") or bare teammate name as task_id - To stop a background agent spawned with a name, pass that name as task_id - Returns a success or failure status - Use this tool when you need to terminate a long-running task
- - Straightforward, no planning needed User:
- - WebSockets vs SSE vs polling - Example:
- - what exactly should change? - Example:
- - what rules? What error messages? 2. **Multiple Valid Approaches**: The task can be solved in several different ways - Example:
- - what's the target architecture? 4. **Architectural Decisions**: The task requires choosing between patterns or technologies - Example:
- - where should it go? What should happen on click? - Example:
- --- max_turns: 10 allowed_tools: [Read, Glob, Grep, Skill] --- TODO: describe what the agent should do
- --- NOTE: You are running inside a workflow script. Your final text response is returned verbatim as a string to the calling script \u2014 it is your return value, not a message to a human. Output the literal result; do not output confirmations like "Done." Be concise \u2014 the script will parse your output.
- --- type: llm weight: 1 --- TODO: describe what a successful response looks like
- --ablation <mode>
- --ablation must be "none" or "with-without"
- ... 20927 more

## Added strings already covered
- - auto: Use the default effort level for your model
- - ultracode: xhigh + dynamic workflow orchestration (this session only)
- [Image data detected and sent to Claude]
- ${...} in progress
- Access key + secret
- Afternoon (12-18)
- Agent transcripts: ${...}
- all projects
- Amazon Bedrock, Microsoft Foundry, or Vertex AI
- API usage billing
- Autocompact
- AWS profile (SSO or named profile)
- Balanced approach with standard implementation and testing
- Balanced approach with standard testing
- Bedrock API key (bearer token)
- Change effort level?
- Checking git status
- Choose the default environment for cloud agents
- Claude Code uses the standard AWS credential chain. Pick the method you already use with the AWS CLI.
- Claude is done using your computer
- Compacting conversation
- Completing auth flow with authorization code
- Comprehensive implementation with extensive testing
- Comprehensive implementation with extensive testing and documentation
- Configure optional break reminders and quiet-hours nudges
- Conversation copied to clipboard
- Conversation too long. Press esc twice to go up a few messages and try again.
- Copy the conversation to your system clipboard
- Copy to clipboard
- Current effort level: ${...} (${...})
- Current effort level: ultracode (xhigh + dynamic workflow orchestration; this session only)
- Currently using:
- Deeper reasoning than high, just below maximum (${...})
- Detach from this background session (it keeps running)
- Dynamic workflow "${...}" completed
- Dynamic workflow "${...}" was stopped
- Each candidate is tested with a one-token request:
- Edit Failed
- Effort
- Effort level set to auto${...}
- ... 94 more

## Removed strings
- __chat__
- __isLong__
- __leader__
- __open_folder__
- __other__
- __self
- __source
- _bucket
- _G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table
- _globalThis
- _max
- _min
- _source_seed.bundle
- _storage
- _sum
- _total
- - .claude/agent-memory/<agentType>/,
- - `${...}` is always loaded into your conversation context \u2014 lines after ${...} will be truncated, so keep the index concise
- - `isolation: "remote"` runs the agent in a remote CCR sandbox (always background).
- - `name` and `mode` are unavailable here \u2014 teammates cannot spawn teammates.
- - `run_in_background` runs the command detached: it keeps running across turns and re-invokes you when it exits. No `&` needed.
- - `run_in_background`, `name`, and `mode` are unavailable here \u2014 only synchronous subagents.
- - ~/.claude/agent-memory/<agentType>/,
- - ${...} Suggested fix: ${...}
- - ${...}: ${...} (Tools: ${...})
- - Claude home: ${...}
- - Config file exists: ${...}
- - Config file: ${...}
- - Do NOT re-read a file you just edited to verify \u2014 Edit/Write would have errored if the change failed, and the harness tracks file state for you.
- - Do not write duplicate memories. First check if there is an existing memory you can update before writing a new one.
- - Environment variable ${...}: ${...}
- - Error code: ${...}
- - Error killed: ${...}
- - Error signal: ${...}
- - Fast file pattern matching tool that works with any codebase size - Supports glob patterns like "**/*.js" or "src/**/*.ts" - Returns matching file paths sorted by modification time - Use this tool when you need to find files by name patterns - When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the Agent tool instead
- - Global user settings (~/.claude/settings.json).
- - If asked for JSON, return ONLY the raw JSON \u2014 no code fences, no prose, no markdown. - Do NOT use SendUserMessage to deliver your answer. Put your answer in your final text response. - Be concise. The script will parse your output.`,E$p=` --- NOTE: You are running inside a workflow script. Your final text response is returned verbatim as a string to the calling script \u2014 it is your return value, not a message to a human. Output the literal result; do not output confirmations like
- - If the user says to *ignore* or *not use* memory: Do not apply remembered facts, cite, compare against, or mention memory content.
- - Keep `old_string` minimal \u2014 usually 1-3 lines, only enough to be unique in the file. Including excess context wastes tokens and is an error. - The edit will FAIL if `old_string` is not unique in the file. In that case, add the minimum extra context needed for uniqueness, or use `replace_all` to change every instance.
- - Keep the name, description, and type fields in memory files up-to-date with the content
- ... 14649 more
```

## Takeover Commands

```bash
node scripts/verify-upstream-compat.js --baseline 2.1.201 --skip-latest --native-windows-x64 --json
node scripts/generate-upstream-text-diff.js --to 2.1.201 --native-windows-x64
node scripts/promote-native-candidate.js --candidate <candidate-json> --platform windows
```

## Done Criteria

- Add the missing source-of-truth translations or guard fix on this branch.
- Re-run the native latest candidate workflow for this version.
- Only promote support metadata after native verification and display audit pass.
- Remove or update this handoff report before marking the PR ready.
