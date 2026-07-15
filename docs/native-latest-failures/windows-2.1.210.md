# Windows native latest candidate failure: 2.1.210

- Run: https://github.com/RomeGe/claude-code-zh-cn/actions/runs/29392171875
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
# Upstream text diff: 2.1.190 -> 2.1.210

- Added upstream strings: 24155
- Removed upstream strings: 15303
- Already covered by translations: 223
- Needs translation review: 23932
- Sensitive review hints: 379

## Added strings needing review
- __addDisposableResource
- __classPrivateFieldIn
- __disposeResources
- __esDecorate
- __Host-gw_dev
- __json_buf
- __new_custom_theme__
- __orphan_summary
- __propKey
- __readyz_probe__
- __remote-workflow
- __rewriteRelativeImportExtension
- __runInitializers
- __setFunctionName
- __spreadArray
- _${...}_SBX
- _claude_fs_right:
- _meta
- _no transcript history for this project_
- _request_id
- _tagName
- _This guidance is pinned to runtime contract ${...} \u2014 the contract the target${...} currently runs. A carry-forward republish keeps this pin._
- - **id**: Task identifier (use with TaskGet, TaskUpdate)
- - `${...}` \u2014 for files under ${...}/
- - `${...}` is loaded into your conversation context \u2014 lines after ${...} will be truncated, so keep the index concise
- - ${...} at ${...}${...}
- - ${...}${...} \u2014 ${...}${...}
- - activeForm:
- - Before assigning tasks to teammates, to see what's available
- - console.log("Hello, World!");
- - Include enough detail in the description for another agent to understand and complete the task - New tasks are created with status 'pending' and no owner - use TaskUpdate with the `owner` parameter to assign them
- - Keep the index concise so you can scan it quickly when recalling memories
- - Network latency: ${...}ms (${...}%)
- - Not configured
- - Pre-request overhead: ${...}ms (${...}%)
- - Stops a running background task by its ID - Takes a task_id parameter identifying the task to stop - To stop an agent-team teammate, pass its agent ID ("name@team") or bare teammate name as task_id - To stop a background agent spawned with a name, pass that name as task_id - Returns a success or failure status - Use this tool when you need to terminate a long-running task
- - The index file is loaded into your conversation context \u2014 lines after ${...} will be truncated, so keep it concise
- - When memories (personal or team) seem relevant, or the user references prior work with them or others in their organization.
- - When memories seem relevant, or the user references prior work with them or others in their organization.
- - When you cannot find an answer or the feature doesn't exist, direct the user to use /feedback to report a feature request or bug
- ... 23892 more

## Added strings already covered
- - auto: Use the default effort level for your model
- - ultracode: xhigh + dynamic workflow orchestration (this session only)
- (OSC 777)
- (OSC 9)
- (OSC 99)
- [Image data detected and sent to Claude]
- [Warning]
- Active days:
- Afternoon (12-18)
- Agent idle
- all projects
- Allow external CLAUDE.md file imports?
- Allow possible downgrade to stable version
- Always copy full response
- Auto-compact
- Auto-compact is currently disabled (see /config)
- Auto-connect to IDE (external terminal)
- Auto-install IDE extension
- Auto-update channel
- Auto-updates are disabled in development builds.
- Autocompact
- Autocompact buffer
- Autocompact is disabled
- Balanced approach with standard implementation and testing
- Balanced approach with standard testing
- Binary file
- Binary file - cannot display diff
- Change effort level?
- Channel notifications re-registered after reconnect
- Checking out branch
- Choose the default environment for cloud agents
- Choose the text style that looks best with your terminal
- Claude Code on the web drafts a plan you can edit and approve
- Claude in Chrome enabled by default
- Claude in Chrome is not supported in WSL at this time.
- Claude in Chrome requires a claude.ai subscription.
- CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting here.
- Commit, push, and open a PR
- Compact buffer
- Compaction canceled.
- ... 183 more

## Removed strings
- _____________ | \ \ | NEW TERMS \__\ | | | ---------- | | ---------- | | ---------- | | ---------- | | ---------- | | | |______________|
- __isLong__
- __leader__
- __open_folder__
- __show_all__
- _bucket
- _comment
- _G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table
- _max
- _min
- _parseAllDigestBytes
- _redirect
- _skipPaddingChecks
- _storage
- _sum
- _total
- _valid
- - .claude/agent-memory/<agentType>/,
- - `isolation: "remote"` runs the agent in a remote CCR sandbox (always background).
- - `name` and `mode` are unavailable here \u2014 teammates cannot spawn teammates.
- - `run_in_background` runs the command detached: it keeps running across turns and re-invokes you when it exits. No `&` needed.
- - `run_in_background`, `name`, and `mode` are unavailable here \u2014 only synchronous subagents.
- - ~/.claude/agent-memory/<agentType>/,
- - ${...} Suggested fix: ${...}
- - ${...}: ${...} (Tools: ${...})
- - Before producing ANY summary or analysis, you MUST explicitly describe what portion of the content you have read. ***If you did not read the entire content, you MUST explicitly state this.*** - If after a few attempts you cannot read the file (file not found, lines too long for Read's offset/limit, no shell access), STOP retrying. Summarize what you were able to read, explicitly state which portion you could not read and why, and proceed.
- - Enabled "Use Option as Meta key"
- - Environment variable ${...}: ${...}
- - For analysis or summarization that requires reading the full content: ${...} - If the ${...} tool is available, do this inside a subagent so the full output stays out of your main context. Give it the instruction above verbatim, and be explicit about what it must return \u2014 e.g. "${...}" A vague "summarize this" may lose detail.
- - For targeted queries (find a value, filter by field): use jq on the file directly.
- - For targeted searches (find a line, locate a string): use grep on the file directly.
- - For targeted searches (find a string): use grep on the file directly.
- - Global user settings (~/.claude/settings.json).
- - If asked for JSON, return ONLY the raw JSON \u2014 no code fences, no prose, no markdown. - Do NOT use SendUserMessage to deliver your answer. Put your answer in your final text response. - Be concise. The script will parse your output.`,E$p=` --- NOTE: You are running inside a workflow script. Your final text response is returned verbatim as a string to the calling script \u2014 it is your return value, not a message to a human. Output the literal result; do not output confirmations like
- - If you receive truncation warnings when reading the file ("[N lines truncated]"), reduce the chunk size until you have read 100% of the content without truncation ***DO NOT PROCEED UNTIL YOU HAVE DONE THIS***. Bash output is limited to ${...} chars.
- - If you receive truncation warnings when reading the file, reduce the chunk size until you have read 100% of the content without truncation.
- - Keybinding (${...}): ${...}${...}
- - Note: this file's lines are too long for Read's offset/limit chunking. If a shell tool is available, slice by character range (e.g. python read()[A:B], dd, or cut -c) instead.
- - Plugin note${...}: ${...}
- - Plugin setting: ${...}
- ... 15263 more
```

## Takeover Commands

```bash
node scripts/verify-upstream-compat.js --baseline 2.1.210 --skip-latest --native-windows-x64 --json
node scripts/generate-upstream-text-diff.js --to 2.1.210 --native-windows-x64
node scripts/promote-native-candidate.js --candidate <candidate-json> --platform windows
```

## Done Criteria

- Add the missing source-of-truth translations or guard fix on this branch.
- Re-run the native latest candidate workflow for this version.
- Only promote support metadata after native verification and display audit pass.
- Remove or update this handoff report before marking the PR ready.
