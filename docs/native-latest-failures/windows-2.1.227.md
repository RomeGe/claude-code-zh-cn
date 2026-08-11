# Windows native latest candidate failure: 2.1.227

- Run: https://github.com/RomeGe/claude-code-zh-cn/actions/runs/31459319515
- Head SHA: `72315ce54c4d22add62a299af56b386d5f4c5511`
- Status: `fail`
- Candidate kind: `native`
- Native: `win32-x64` / `ok` / `ok` / `ok`
- Display audit: `fail` (38 issues / 11 commands)

## What Failed

- Candidate verification did not pass: `status=fail`.
- Display audit did not pass: `status=fail`.
- Summary: pass=0, fail=1, skip=0.

## Display Audit Issues

- `top_help_line_41` (`top_help`, display-untranslated-line)

  ```text
  --cloud [description|session_id|url]  Create a cloud session with the given
  ```

- `top_help_line_42` (`top_help`, display-untranslated-line)

  ```text
  description, or attach to an existing
  ```

- `top_help_line_43` (`top_help`, display-untranslated-line)

  ```text
  one by session ID or claude.ai/code URL
  ```

- `top_help_line_54` (`top_help`, display-untranslated-line)

  ```text
  --environment <environment_id>        Create a new cloud session that runs on
  ```

- `top_help_line_55` (`top_help`, display-untranslated-line)

  ```text
  the given self-hosted environment
  ```

- `top_help_line_70` (`top_help`, display-untranslated-line)

  ```text
  --forward-subagent-text               Forward subagent text and thinking
  ```

- `top_help_line_71` (`top_help`, display-untranslated-line)

  ```text
  blocks as assistant/user messages with
  ```

- `top_help_line_72` (`top_help`, display-untranslated-line)

  ```text
  parent_tool_use_id set (only works with
  ```

- `top_help_line_73` (`top_help`, display-untranslated-line)

  ```text
  --print and --output-format=stream-json)
  ```

- `top_help_line_164` (`top_help`, display-untranslated-line)

  ```text
  auto-mode                             Inspect or reset auto mode classifier
  ```

- `top_help_line_166` (`top_help`, display-untranslated-line)

  ```text
  doctor                                Check the health of your Claude Code
  ```

- `top_help_line_167` (`top_help`, display-untranslated-line)

  ```text
  installation. Reads settings files in
  ```

- `top_help_line_168` (`top_help`, display-untranslated-line)

  ```text
  the current directory without a trust
  ```

- `top_help_line_169` (`top_help`, display-untranslated-line)

  ```text
  prompt. For a full checkup that can also
  ```

- `top_help_line_170` (`top_help`, display-untranslated-line)

  ```text
  fix issues, run /doctor in a session.
  ```

- `top_help_line_171` (`top_help`, display-untranslated-line)

  ```text
  gateway [options]                     Run the enterprise auth/telemetry
  ```

- `top_help_line_173` (`top_help`, display-untranslated-line)

  ```text
  import [options] [source]             Import config from another AI coding
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

- `ultrareview_help_line_8` (`ultrareview_help`, display-untranslated-line)

  ```text
  --no-post            Do not post the findings to the PR (the default; accepted
  ```

- `ultrareview_help_line_9` (`ultrareview_help`, display-untranslated-line)

  ```text
  for parity with the /ultrareview and /code-review ultra
  ```

- `ultrareview_help_line_11` (`ultrareview_help`, display-untranslated-line)

  ```text
  --post               Post the finished review's findings to the PR as you (PR
  ```

- `ultrareview_help_line_12` (`ultrareview_help`, display-untranslated-line)

  ```text
  targets only; one plain comment, not a review)
  ```

## Text Diff Excerpt

```markdown
# Upstream text diff: 2.1.190 -> 2.1.227

- Added upstream strings: 36252
- Removed upstream strings: 18089
- Already covered by translations: 220
- Needs translation review: 36032
- Sensitive review hints: 674

## Added strings needing review
- __addDisposableResource
- __artifactConsentAskCanReachUser
- __artifactPlanConsentAsk
- __artifactPlanConsentDecisionCaps
- __artifactPublishTarget
- __cc_set=\${$__cc_name+x}
- __classPrivateFieldIn
- __disposeResources
- __esDecorate
- __explicit_off__
- __Host-gw_dev
- __new_custom_theme__
- __not_strictly_false__
- __org_memory_project_off__
- __org_memory_project_picker__
- __propKey
- __readyz_probe__
- __remote-workflow
- __rewriteRelativeImportExtension
- __runInitializers
- __schema${...}
- __setFunctionName
- __spreadArray
- _${...}_SBX
- _arr
- _chunkTimes
- _dispose
- _errs
- _idmap
- _in_
- _meta
- _nothing found_
- _Pragma
- _prefault
- _This guidance is pinned to runtime contract ${...} \u2014 the contract the target${...} currently runs. A carry-forward republish keeps this pin._
- _thumb.html
- _thumb.img
- - [Title](file.md) \u2014 one-line hook`. The index has no frontmatter. Never write memory content directly into the index.
- - `${...}` \u2014 for files under ${...}/
- - `${...}` also writes a reference skill (`skills/import-to-claude-code/` in the Claude config directory) capturing the unmapped items above for manual porting \u2014 to skip that write, use the terminal picker instead.
- ... 35992 more

## Added strings already covered
- - auto: Use the default effort level for your model
- - ultracode: xhigh + dynamic workflow orchestration (this session only)
- (Command copied to clipboard)
- (OSC 777)
- (OSC 9)
- (OSC 99)
- [Warning]
- @ for file paths
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
- Commit, push, and open a PR
- Compacting conversation
- Compaction canceled.
- Completing auth flow with authorization code
- Comprehensive implementation with extensive testing
- Comprehensive implementation with extensive testing and documentation
- Configure optional break reminders and quiet-hours nudges
- Configure the auto-compact window size
- ... 180 more

## Removed strings
- __chat__
- __isLong__
- __leader__
- __other__
- __shared
- _bucket
- _G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table
- _hidden
- _local_
- _max
- _min
- _parseAllDigestBytes
- _redirect
- _skipPaddingChecks
- _source_seed.bundle
- _staging_
- _storage
- _sum
- - .claude/agent-memory/<agentType>/,
- - `${...}` is always loaded into your conversation context \u2014 lines after ${...} will be truncated, so keep the index concise
- - `name` and `mode` are unavailable here \u2014 teammates cannot spawn teammates.
- - `run_in_background`, `name`, and `mode` are unavailable here \u2014 only synchronous subagents.
- - ~/.claude/agent-memory/<agentType>/,
- - ${...} Suggested fix: ${...}
- - ${...}: ${...} (Tools: ${...})
- - Any LLM API errors are from the Anthropic API, not from any other model provider
- - Be concise, specific and descriptive of the actual problem
- - Be direct and clear for developers to understand the problem
- - Environment info:
- - Environment variable ${...}: ${...}
- - Escape character is backtick (`), not backslash - Use Verb-Noun cmdlet naming: Get-ChildItem, Set-Location, New-Item, Remove-Item - Common aliases: ls (Get-ChildItem), cd (Set-Location), cat (Get-Content), rm (Remove-Item) - Pipe operator | works similarly to bash but passes objects, not text - Use Select-Object, Where-Object, ForEach-Object for filtering and transformation - String interpolation:
- - Fast file pattern matching tool that works with any codebase size - Supports glob patterns like "**/*.js" or "src/**/*.ts" - Returns matching file paths sorted by modification time - Use this tool when you need to find files by name patterns - When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the Agent tool instead
- - For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)
- - Git repo metadata:
- - Global user settings (~/.claude/settings.json).
- - If asked for JSON, return ONLY the raw JSON \u2014 no code fences, no prose, no markdown. - Do NOT use SendUserMessage to deliver your answer. Put your answer in your final text response. - Be concise. The script will parse your output.`,E$p=` --- NOTE: You are running inside a workflow script. Your final text response is returned verbatim as a string to the calling script \u2014 it is your return value, not a message to a human. Output the literal result; do not output confirmations like
- - If you cannot determine a clear issue, use "Bug Report: [brief description]"
- - Include the type of issue [Bug] or [Feature Request] as the first thing in the title
- - Keep `old_string` minimal \u2014 usually 1-3 lines, only enough to be unique in the file. Including excess context wastes tokens and is an error. - The edit will FAIL if `old_string` is not unique in the file. In that case, add the minimum extra context needed for uniqueness, or use `replace_all` to change every instance.
- - Keybinding (${...}): ${...}${...}
- ... 18049 more
```

## Takeover Commands

```bash
node scripts/verify-upstream-compat.js --baseline 2.1.227 --skip-latest --native-windows-x64 --json
node scripts/generate-upstream-text-diff.js --to 2.1.227 --native-windows-x64
node scripts/promote-native-candidate.js --candidate <candidate-json> --platform windows
```

## Done Criteria

- Add the missing source-of-truth translations or guard fix on this branch.
- Re-run the native latest candidate workflow for this version.
- Only promote support metadata after native verification and display audit pass.
- Remove or update this handoff report before marking the PR ready.
