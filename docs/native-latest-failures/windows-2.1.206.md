# Windows native latest candidate failure: 2.1.206

- Run: https://github.com/RomeGe/claude-code-zh-cn/actions/runs/29075219127
- Head SHA: `72315ce54c4d22add62a299af56b386d5f4c5511`
- Status: `fail`
- Candidate kind: `native`
- Native: `win32-x64` / `ok` / `ok` / `ok`
- Display audit: `fail` (15 issues / 11 commands)

## What Failed

- Candidate verification did not pass: `status=fail`.
- Display audit did not pass: `status=fail`.
- Summary: pass=0, fail=1, skip=0.

## Display Audit Issues

- `top_help_line_152` (`top_help`, display-untranslated-line)

  ```text
  doctor                                Check the health of your Claude Code
  ```

- `top_help_line_153` (`top_help`, display-untranslated-line)

  ```text
  installation. Reads settings files in
  ```

- `top_help_line_154` (`top_help`, display-untranslated-line)

  ```text
  the current directory without a trust
  ```

- `top_help_line_155` (`top_help`, display-untranslated-line)

  ```text
  prompt. For a full checkup that can also
  ```

- `top_help_line_156` (`top_help`, display-untranslated-line)

  ```text
  fix issues, run /doctor in a session.
  ```

- `top_help_line_157` (`top_help`, display-untranslated-line)

  ```text
  gateway [options]                     Run the enterprise auth/telemetry
  ```

- `doctor_help_line_3` (`doctor_help`, display-untranslated-line)

  ```text
  Check the health of your Claude Code installation. Reads settings files in the
  ```

- `doctor_help_line_4` (`doctor_help`, display-untranslated-line)

  ```text
  current directory without a trust prompt. For a full checkup that can also fix
  ```

- `doctor_help_line_5` (`doctor_help`, display-untranslated-line)

  ```text
  issues, run /doctor in a session.
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
# Upstream text diff: 2.1.190 -> 2.1.206

- Added upstream strings: 22946
- Removed upstream strings: 16523
- Already covered by translations: 141
- Needs translation review: 22805
- Sensitive review hints: 315

## Added strings needing review
- __Host-gw_dev
- __idx_${...}
- __json_buf
- __manual__
- __orphan_summary
- __readyz_probe__
- __remote-workflow
- __wRg$
- _claude_fs_right:
- _jwt
- _no transcript history for this project_
- _request_id
- _This recon step FAILED \u2014 data unavailable. Treat every reference to this section as "not queryable here"._
- - `${...}` \u2014 for files under ${...}/
- - `${...}` is loaded into your conversation context \u2014 lines after ${...} will be truncated, so keep the index concise
- - ${...} \u2014 ${...}${...}
- - ${...} at ${...}${...}
- - activeForm:
- - curl -s url | jq '.data[]' \u2192
- - Do not use the exit plan mode tool because you are not planning the implementation steps of a task. 2. Initial task:
- - End git commit messages with: ${...}
- - End PR bodies with: ${...}
- - git reset --hard origin/main \u2192
- - git status \u2192
- - Keep the index concise so you can scan it quickly when recalling memories
- - Network latency: ${...}ms (${...}%)
- - npm install \u2192
- - Pre-request overhead: ${...}ms (${...}%)
- - Stops a running background task by its ID - Takes a task_id parameter identifying the task to stop - To stop an agent-team teammate, pass its agent ID ("name@team") or bare teammate name as task_id - To stop a background agent spawned with a name, pass that name as task_id - Returns a success or failure status - Use this tool when you need to terminate a long-running task
- - that's exactly what THIS tool does. ExitPlanMode inherently requests user approval of your plan. ## Examples 1. Initial task:
- - The index file is loaded into your conversation context \u2014 lines after ${...} will be truncated, so keep it concise
- - Use the exit plan mode tool after you have finished planning the implementation steps of the task. 3. Initial task:
- - When memories (personal or team) seem relevant, or the user references prior work with them or others in their organization.
- - When memories seem relevant, or the user references prior work with them or others in their organization.
- - You MUST avoid saving sensitive data within shared team memories. For example, never save API keys or user credentials.
- --- max_turns: 10 allowed_tools: [Read, Glob, Grep, Skill] --- TODO: describe what the agent should do
- --- NOTE: You are running inside a workflow script. Your final text response is returned verbatim as a string to the calling script \u2014 it is your return value, not a message to a human. Output the literal result; do not output confirmations like "Done." Be concise \u2014 the script will parse your output.
- --- type: llm weight: 1 --- TODO: describe what a successful response looks like
- -----BEGIN PRIVATE KEY-----
- --ablation <mode>
- ... 22765 more

## Added strings already covered
- - auto: Use the default effort level for your model
- - ultracode: xhigh + dynamic workflow orchestration (this session only)
- [Image data detected and sent to Claude]
- [Warning]
- ${...} in progress
- Access denied to specific paths outside allowed directories
- Access key + secret
- Afternoon (12-18)
- Agent idle
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
- Commands cannot run outside the sandbox under any circumstances.
- Compacting conversation
- Completing auth flow with authorization code
- Comprehensive implementation with extensive testing
- Comprehensive implementation with extensive testing and documentation
- Configure optional break reminders and quiet-hours nudges
- Connection error.
- Contains warnings
- Conversation copied to clipboard
- Copy the conversation to your system clipboard
- Copy to clipboard
- Current effort level: ${...} (${...})
- Current effort level: ultracode (xhigh + dynamic workflow orchestration; this session only)
- Currently using:
- Deeper reasoning than high, just below maximum (${...})
- Detach from this background session (it keeps running)
- Dynamic workflow "${...}" completed
- ... 101 more

## Removed strings
- __isLong__
- __leader__
- __open_folder__
- _bucket
- _G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table
- _max
- _min
- _parseAllDigestBytes
- _skipPaddingChecks
- _source_seed.bundle
- _storage
- _sum
- _total
- _valid
- - .claude/agent-memory/<agentType>/,
- - `isolation: "remote"` runs the agent in a remote CCR sandbox (always background).
- - `name` and `mode` are unavailable here \u2014 teammates cannot spawn teammates.
- - `run_in_background`, `name`, and `mode` are unavailable here \u2014 only synchronous subagents.
- - ~/.claude/agent-memory/<agentType>/,
- - ${...} Suggested fix: ${...}
- - ${...}: ${...} (Tools: ${...})
- - Claude home: ${...}
- - Config file exists: ${...}
- - Config file: ${...}
- - Environment variable ${...}: ${...}
- - Error code: ${...}
- - Error killed: ${...}
- - Error signal: ${...}
- - Global user settings (~/.claude/settings.json).
- - If asked for JSON, return ONLY the raw JSON \u2014 no code fences, no prose, no markdown. - Do NOT use SendUserMessage to deliver your answer. Put your answer in your final text response. - Be concise. The script will parse your output.`,E$p=` --- NOTE: You are running inside a workflow script. Your final text response is returned verbatim as a string to the calling script \u2014 it is your return value, not a message to a human. Output the literal result; do not output confirmations like
- - Keep `old_string` minimal \u2014 usually 1-3 lines, only enough to be unique in the file. Including excess context wastes tokens and is an error. - The edit will FAIL if `old_string` is not unique in the file. In that case, add the minimum extra context needed for uniqueness, or use `replace_all` to change every instance.
- - Keybinding (${...}): ${...}${...}
- - Plugin note${...}: ${...}
- - Plugin setting: ${...}
- - Plugin${...}: ${...}
- - Project settings (.claude/settings.json).
- - Sandbox: ${...} (See /sandbox for install instructions)
- - Settings${...}: ${...}${...}
- - Shell path: ${...}
- - Stops a running background task by its ID - Takes a task_id parameter identifying the task to stop - Returns a success or failure status - Use this tool when you need to terminate a long-running task
- ... 16483 more
```

## Takeover Commands

```bash
node scripts/verify-upstream-compat.js --baseline 2.1.206 --skip-latest --native-windows-x64 --json
node scripts/generate-upstream-text-diff.js --to 2.1.206 --native-windows-x64
node scripts/promote-native-candidate.js --candidate <candidate-json> --platform windows
```

## Done Criteria

- Add the missing source-of-truth translations or guard fix on this branch.
- Re-run the native latest candidate workflow for this version.
- Only promote support metadata after native verification and display audit pass.
- Remove or update this handoff report before marking the PR ready.
