# Windows native latest candidate failure: 2.1.204

- Run: https://github.com/RomeGe/claude-code-zh-cn/actions/runs/28921519601
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
# Upstream text diff: 2.1.190 -> 2.1.204

- Added upstream strings: 21129
- Removed upstream strings: 15145
- Already covered by translations: 138
- Needs translation review: 20991
- Sensitive review hints: 247

## Added strings needing review
- __*` tools are, use those instead (they reach the same Claude Design API). If neither is available, tell the user to run `/design login` and stop \u2014 do not guess at Claude Design behaviour without the tools.
- __Host-gw_dev
- __idx_${...}
- __json_buf
- __manual__
- __orphan_summary
- __readyz_probe__
- __remote-workflow
- __wRg$
- _claude_fs_right:
- _request_id
- - `${...}` \u2014 for files under ${...}/
- - ${...} \u2014 ${...}${...}
- - ${...} at ${...}${...}
- - activeForm:
- - Do not use the exit plan mode tool because you are not planning the implementation steps of a task. 2. Initial task:
- - Network latency: ${...}ms (${...}%)
- - Pre-request overhead: ${...}ms (${...}%)
- - Stops a running background task by its ID - Takes a task_id parameter identifying the task to stop - To stop an agent-team teammate, pass its agent ID ("name@team") or bare teammate name as task_id - To stop a background agent spawned with a name, pass that name as task_id - Returns a success or failure status - Use this tool when you need to terminate a long-running task
- - that's exactly what THIS tool does. ExitPlanMode inherently requests user approval of your plan. ## Examples 1. Initial task:
- - Use the exit plan mode tool after you have finished planning the implementation steps of the task. 3. Initial task:
- --- max_turns: 10 allowed_tools: [Read, Glob, Grep, Skill] --- TODO: describe what the agent should do
- --- NOTE: You are running inside a workflow script. Your final text response is returned verbatim as a string to the calling script \u2014 it is your return value, not a message to a human. Output the literal result; do not output confirmations like "Done." Be concise \u2014 the script will parse your output.
- --- type: llm weight: 1 --- TODO: describe what a successful response looks like
- --ablation <mode>
- --ablation must be "none" or "with-without"
- --agent-color
- --agent-id
- --agent-name
- --agent-type
- --allow-tools <tools...>
- --bg and --print conflict: --print never starts the interactive session that `claude agents` attaches to, so the job would be unattachable. The prompt is the positional \u2014 drop --print: `claude --bg '<task>'`.
- --bg with auto mode requires opting in first. Run `claude --permission-mode auto` once interactively.
- --bg with bypassPermissions requires accepting the disclaimer first. Run `claude --dangerously-skip-permissions` once interactively.
- --body @' ## Summary <1-3 bullet points> ## Test plan [Bulleted markdown checklist of TODOs for testing the pull request...]${p}${s?` ${s}`:
- --cache
- --cached
- --case "${...}"
- --case <glob>
- --config <path>
- ... 20951 more

## Added strings already covered
- - auto: Use the default effort level for your model
- - ultracode: xhigh + dynamic workflow orchestration (this session only)
- [Image data detected and sent to Claude]
- ${...} in progress
- Access key + secret
- Afternoon (12-18)
- Agent idle
- Agent transcripts: ${...}
- all projects
- Amazon Bedrock, Microsoft Foundry, or Vertex AI
- API usage billing
- Autocompact
- AWS profile (SSO or named profile)
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
- Configure optional break reminders and quiet-hours nudges
- Connection error.
- Conversation copied to clipboard
- Conversation too long. Press esc twice to go up a few messages and try again.
- Copy the conversation to your system clipboard
- Copy to clipboard
- Current effort level: ${...} (${...})
- Current effort level: ultracode (xhigh + dynamic workflow orchestration; this session only)
- Currently using:
- Detach from this background session (it keeps running)
- Dynamic workflow "${...}" completed
- Dynamic workflow "${...}" was stopped
- Each candidate is tested with a one-token request:
- Edit Failed
- Effort
- Effort level set to auto${...}
- Effort level: auto (currently ${...})
- ... 98 more

## Removed strings
- __assign
- __asyncDelegator
- __asyncGenerator
- __asyncValues
- __await
- __awaiter
- __classPrivateFieldGet
- __classPrivateFieldSet
- __createBinding
- __decorate
- __exportStar
- __extends
- __generator
- __importDefault
- __importStar
- __isLong__
- __leader__
- __makeTemplateObject
- __metadata
- __open_folder__
- __param
- __read
- __rest
- __self
- __source
- __spread
- __spreadArrays
- __values
- _bucket
- _G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table
- _max
- _min
- _source_seed.bundle
- _storage
- _sum
- _total
- _valid
- - .claude/agent-memory/<agentType>/,
- - `${...}` is always loaded into your conversation context \u2014 lines after ${...} will be truncated, so keep the index concise
- - `isolation: "remote"` runs the agent in a remote CCR sandbox (always background).
- ... 15105 more
```

## Takeover Commands

```bash
node scripts/verify-upstream-compat.js --baseline 2.1.204 --skip-latest --native-windows-x64 --json
node scripts/generate-upstream-text-diff.js --to 2.1.204 --native-windows-x64
node scripts/promote-native-candidate.js --candidate <candidate-json> --platform windows
```

## Done Criteria

- Add the missing source-of-truth translations or guard fix on this branch.
- Re-run the native latest candidate workflow for this version.
- Only promote support metadata after native verification and display audit pass.
- Remove or update this handoff report before marking the PR ready.
