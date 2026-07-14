# Windows native latest candidate failure: 2.1.208

- Run: https://github.com/RomeGe/claude-code-zh-cn/actions/runs/29309198027
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
# Upstream text diff: 2.1.190 -> 2.1.208

- Added upstream strings: 21150
- Removed upstream strings: 20163
- Already covered by translations: 163
- Needs translation review: 20987
- Sensitive review hints: 246

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
- __rewriteRelativeImportExtension
- __runInitializers
- __setFunctionName
- __spreadArray
- _${...}_SBX
- _claude_fs_left:
- _claude_fs_right:
- _nothing found_
- _request_id
- - `${...}` is loaded into your conversation context \u2014 lines after ${...} will be truncated, so keep the index concise
- - ${...} at ${...}${...}
- - console.log("Hello, World!");
- - e.g.
- - Keep the index concise so you can scan it quickly when recalling memories
- - Not configured
- - Stops a running background task by its ID - Takes a task_id parameter identifying the task to stop - To stop an agent-team teammate, pass its agent ID ("name@team") or bare teammate name as task_id - To stop a background agent spawned with a name, pass that name as task_id - Returns a success or failure status - Use this tool when you need to terminate a long-running task
- - The index file is loaded into your conversation context \u2014 lines after ${...} will be truncated, so keep it concise
- - When memories (personal or team) seem relevant, or the user references prior work with them or others in their organization.
- - When memories seem relevant, or the user references prior work with them or others in their organization.
- - When you cannot find an answer or the feature doesn't exist, direct the user to use /feedback to report a feature request or bug
- - You MUST avoid saving sensitive data within shared team memories. For example, never save API keys or user credentials.
- --- max_turns: 10 allowed_tools: [Read, Glob, Grep, Skill] --- TODO: describe what the agent should do
- --- type: llm weight: 1 --- TODO: describe what a successful response looks like
- -----BEGIN CERTIFICATE-----
- -----BEGIN PRIVATE KEY-----
- -----BEGIN PUBLIC KEY-----
- --ablation <mode>
- --ablation must be "none" or "with-without"
- --agent-color
- --agent-id
- ... 20947 more

## Added strings already covered
- (OSC 777)
- (OSC 9)
- (OSC 99)
- [Image data detected and sent to Claude]
- [Warning]
- Active days:
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
- Autocompact buffer
- Autocompact is disabled
- Balanced approach with standard implementation and testing
- Binary file
- Binary file - cannot display diff
- Channel notifications re-registered after reconnect
- Checking out branch
- Choose the text style that looks best with your terminal
- claude doctor
- Claude in Chrome enabled by default
- CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting here.
- Commit, push, and open a PR
- Compact buffer
- Compaction canceled.
- Comprehensive implementation with extensive testing and documentation
- Configure the auto-compact window size
- Connection error.
- Connection is already listening
- Contains warnings
- Context Usage
- Continue the current session in Claude Desktop
- Conversation copied to clipboard
- Conversation too long. Press esc twice to go up a few messages and try again.
- Copy Claude's last response to clipboard (or /copy N for the Nth-latest)
- ... 123 more

## Removed strings
- _____________ | \ \ | NEW TERMS \__\ | | | ---------- | | ---------- | | ---------- | | ---------- | | ---------- | | | |______________|
- __chat__
- __isLong__
- __leader__
- __open_folder__
- __other__
- __show_all__
- _bucket
- _comment
- _G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table
- _max
- _min
- _parseAllDigestBytes
- _redirect
- _simulatedSedEdit
- _skipPaddingChecks
- _source_seed.bundle
- _storage
- _sum
- _total
- _valid
- _zod
- - .claude/agent-memory/<agentType>/,
- - **CONFIRMED** \u2014 can name the inputs/state that trigger it and the wrong output or crash. Quote the line. - **PLAUSIBLE** \u2014 mechanism is real, trigger is uncertain (timing, env, config). State what would confirm it. - **REFUTED** \u2014 factually wrong (code doesn't say that) or guarded elsewhere. Quote the line that proves it.
- - `isolation: "remote"` runs the agent in a remote CCR sandbox (always background).
- - `name` and `mode` are unavailable here \u2014 teammates cannot spawn teammates.
- - `run_in_background`, `name`, and `mode` are unavailable here \u2014 only synchronous subagents.
- - ~/.claude/agent-memory/<agentType>/,
- - ${...} Suggested fix: ${...}
- - ${...}: ${...} (Tools: ${...})
- - Before producing ANY summary or analysis, you MUST explicitly describe what portion of the content you have read. ***If you did not read the entire content, you MUST explicitly state this.*** - If after a few attempts you cannot read the file (file not found, lines too long for Read's offset/limit, no shell access), STOP retrying. Summarize what you were able to read, explicitly state which portion you could not read and why, and proceed.
- - Claude home: ${...}
- - Config file exists: ${...}
- - Config file: ${...}
- - Environment variable ${...}: ${...}
- - Error code: ${...}
- - Error killed: ${...}
- - Error signal: ${...}
- - For analysis or summarization that requires reading the full content: ${...} - If the ${...} tool is available, do this inside a subagent so the full output stays out of your main context. Give it the instruction above verbatim, and be explicit about what it must return \u2014 e.g. "${...}" A vague "summarize this" may lose detail.
- - For targeted queries (find a value, filter by field): use jq on the file directly.
- ... 20123 more
```

## Takeover Commands

```bash
node scripts/verify-upstream-compat.js --baseline 2.1.208 --skip-latest --native-windows-x64 --json
node scripts/generate-upstream-text-diff.js --to 2.1.208 --native-windows-x64
node scripts/promote-native-candidate.js --candidate <candidate-json> --platform windows
```

## Done Criteria

- Add the missing source-of-truth translations or guard fix on this branch.
- Re-run the native latest candidate workflow for this version.
- Only promote support metadata after native verification and display audit pass.
- Remove or update this handoff report before marking the PR ready.
