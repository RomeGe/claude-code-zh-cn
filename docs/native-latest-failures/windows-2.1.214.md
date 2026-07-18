# Windows native latest candidate failure: 2.1.214

- Run: https://github.com/RomeGe/claude-code-zh-cn/actions/runs/29632593080
- Head SHA: `72315ce54c4d22add62a299af56b386d5f4c5511`
- Status: `fail`
- Candidate kind: `native`
- Native: `win32-x64` / `ok` / `ok` / `ok`
- Display audit: `fail` (28 issues / 11 commands)

## What Failed

- Candidate verification did not pass: `status=fail`.
- Display audit did not pass: `status=fail`.
- Summary: pass=0, fail=1, skip=0.

## Display Audit Issues

- `top_help_line_62` (`top_help`, display-untranslated-line)

  ```text
  --forward-subagent-text               Forward subagent text and thinking
  ```

- `top_help_line_63` (`top_help`, display-untranslated-line)

  ```text
  blocks as assistant/user messages with
  ```

- `top_help_line_64` (`top_help`, display-untranslated-line)

  ```text
  parent_tool_use_id set (only works with
  ```

- `top_help_line_65` (`top_help`, display-untranslated-line)

  ```text
  --print and --output-format=stream-json)
  ```

- `top_help_line_155` (`top_help`, display-untranslated-line)

  ```text
  auto-mode                             Inspect or reset auto mode classifier
  ```

- `top_help_line_157` (`top_help`, display-untranslated-line)

  ```text
  doctor                                Check the health of your Claude Code
  ```

- `top_help_line_158` (`top_help`, display-untranslated-line)

  ```text
  installation. Reads settings files in
  ```

- `top_help_line_159` (`top_help`, display-untranslated-line)

  ```text
  the current directory without a trust
  ```

- `top_help_line_160` (`top_help`, display-untranslated-line)

  ```text
  prompt. For a full checkup that can also
  ```

- `top_help_line_161` (`top_help`, display-untranslated-line)

  ```text
  fix issues, run /doctor in a session.
  ```

- `top_help_line_162` (`top_help`, display-untranslated-line)

  ```text
  gateway [options]                     Run the enterprise auth/telemetry
  ```

- `agents_help_line_9` (`agents_help`, display-untranslated-line)

  ```text
  --all                                 With --json: also include completed
  ```

- `agents_help_line_10` (`agents_help`, display-untranslated-line)

  ```text
  background sessions
  ```

- `agents_help_line_19` (`agents_help`, display-untranslated-line)

  ```text
  --json                                Print active sessions (interactive and
  ```

- `agents_help_line_20` (`agents_help`, display-untranslated-line)

  ```text
  background) as a JSON array and exit
  ```

- `agents_help_line_21` (`agents_help`, display-untranslated-line)

  ```text
  (for scripting; does not require a TTY)
  ```

- `auto_mode_help_line_3` (`auto_mode_help`, display-untranslated-line)

  ```text
  Inspect or reset auto mode classifier configuration
  ```

- `auto_mode_help_line_15` (`auto_mode_help`, display-untranslated-line)

  ```text
  reset [options]     Reset auto mode configuration to the shipped defaults by
  ```

- `auto_mode_help_line_16` (`auto_mode_help`, display-untranslated-line)

  ```text
  removing the autoMode section from your user settings file
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
# Upstream text diff: 2.1.190 -> 2.1.214

- Added upstream strings: 28661
- Removed upstream strings: 15560
- Already covered by translations: 178
- Needs translation review: 28483
- Sensitive review hints: 425

## Added strings needing review
- __addDisposableResource
- __artifactConsentAskCanReachUser
- __classPrivateFieldIn
- __disposeResources
- __esDecorate
- __idx_${...}
- __json_buf
- __orphan_summary
- __propKey
- __remote-workflow
- __rewriteRelativeImportExtension
- __runInitializers
- __setFunctionName
- __spreadArray
- _claude_fs_left:
- _claude_fs_right:
- _meta
- _nothing found_
- _Pragma
- _request_id
- _tagName
- _This guidance is pinned to runtime contract ${...} \u2014 the contract the target${...} currently runs. A carry-forward republish keeps this pin._
- - **${...}** \u2014 ${...}
- - `${...}` \u2014 for files under ${...}/
- - `${...}` also writes a reference skill (`skills/import-to-claude-code/` in the Claude config directory) capturing the unmapped items above for manual porting \u2014 to skip that write, use the terminal picker instead.
- - `${...}` is loaded into your conversation context \u2014 lines after ${...} will be truncated, so keep the index concise
- - ${...} \u2014 ${...}
- - ${...} from project-level config
- - ${...} item(s) from project-level config (review the project's .codex/.gemini dir directly)
- - ${...}${...} \u2014 ${...}${...}
- - curl -s url | jq '.data[]' \u2192
- - Disabled the audible bell
- - End git commit messages with: ${...}
- - End PR bodies with: ${...}
- - For per-item selection, \u26A0-flagged items, skills, or project-level items, they run `claude import` from a terminal (opens the checkbox picker).
- - git reset --hard origin/main \u2192
- - git status \u2192
- - Keep the index concise so you can scan it quickly when recalling memories
- - Left the audible bell setting unchanged (screen-reader mode uses it)
- - Line ${...}
- ... 28443 more

## Added strings already covered
- - auto: Use the default effort level for your model
- - ultracode: xhigh + dynamic workflow orchestration (this session only)
- [Warning]
- @ for file paths
- Access denied to specific paths outside allowed directories
- Afternoon (12-18)
- all projects
- Auto-compact
- Auto-compact is currently disabled (see /config)
- Auto-connect to IDE (external terminal)
- Auto-install IDE extension
- Auto-update channel
- Autocompact buffer
- Balanced approach with standard implementation and testing
- Balanced approach with standard testing
- Channel notifications re-registered after reconnect
- Checking out branch
- Choose the default environment for cloud agents
- Claude Code on the web drafts a plan you can edit and approve
- Claude in Chrome enabled by default
- CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting here.
- Commands cannot run outside the sandbox under any circumstances.
- Commit, push, and open a PR
- Compact buffer
- Compaction canceled.
- Completing auth flow with authorization code
- Comprehensive implementation with extensive testing
- Comprehensive implementation with extensive testing and documentation
- Configure optional break reminders and quiet-hours nudges
- Configure the auto-compact window size
- Connect to an IDE for integrated development features.
- Connection error.
- Connection is already listening
- Contains warnings
- Continue the current session in Claude Desktop
- Conversation copied to clipboard
- Conversation too long. Press esc twice to go up a few messages and try again.
- Copy Claude's last response to clipboard (or /copy N for the Nth-latest)
- Copy on select
- Copy the conversation to your system clipboard
- ... 138 more

## Removed strings
- __isLong__
- __leader__
- __self
- __source
- _bucket
- _comment
- _G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table
- _hidden
- _max
- _min
- _parseAllDigestBytes
- _redirect
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
- - Before producing ANY summary or analysis, you MUST explicitly describe what portion of the content you have read. ***If you did not read the entire content, you MUST explicitly state this.*** - If after a few attempts you cannot read the file (file not found, lines too long for Read's offset/limit, no shell access), STOP retrying. Summarize what you were able to read, explicitly state which portion you could not read and why, and proceed.
- - Environment variable ${...}: ${...}
- - Escape character is backtick (`), not backslash - Use Verb-Noun cmdlet naming: Get-ChildItem, Set-Location, New-Item, Remove-Item - Common aliases: ls (Get-ChildItem), cd (Set-Location), cat (Get-Content), rm (Remove-Item) - Pipe operator | works similarly to bash but passes objects, not text - Use Select-Object, Where-Object, ForEach-Object for filtering and transformation - String interpolation:
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
- ... 15520 more
```

## Takeover Commands

```bash
node scripts/verify-upstream-compat.js --baseline 2.1.214 --skip-latest --native-windows-x64 --json
node scripts/generate-upstream-text-diff.js --to 2.1.214 --native-windows-x64
node scripts/promote-native-candidate.js --candidate <candidate-json> --platform windows
```

## Done Criteria

- Add the missing source-of-truth translations or guard fix on this branch.
- Re-run the native latest candidate workflow for this version.
- Only promote support metadata after native verification and display audit pass.
- Remove or update this handoff report before marking the PR ready.
