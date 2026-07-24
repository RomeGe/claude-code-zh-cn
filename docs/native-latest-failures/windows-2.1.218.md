# Windows native latest candidate failure: 2.1.218

- Run: https://github.com/RomeGe/claude-code-zh-cn/actions/runs/30071269466
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
# Upstream text diff: 2.1.190 -> 2.1.218

- Added upstream strings: 29239
- Removed upstream strings: 15366
- Already covered by translations: 164
- Needs translation review: 29075
- Sensitive review hints: 458

## Added strings needing review
- __addDisposableResource
- __artifactConsentAskCanReachUser
- __classPrivateFieldIn
- __disposeResources
- __esDecorate
- __idx_${...}
- __json_buf
- __org_memory_project_off__
- __org_memory_project_picker__
- __orphan_summary
- __propKey
- __remote-workflow
- __rewriteRelativeImportExtension
- __runInitializers
- __setFunctionName
- __spreadArray
- __wRg$
- _${...} (gh output unparseable)._
- _${...} (gh unavailable, unauthenticated, or token lacks org scope)._
- _${...} ${...} and ${...} project ${...} could not be enumerated (unreadable, transient error, or past the enumeration cap) \u2014 coverage is partial; treat missing projects as unknown, not empty._
- _${...} ${...} could not be read (removed mid-gather, or refused as a symlink/hardlink alias)._
- _${...} ${...} exceeded the ${...} MiB per-file cap \u2014 only the most recent part of each was scanned._
- _Aggregate byte cap reached (${...} MiB) \u2014 remaining ${...} ${...} not scanned._
- _Command-word extraction hit its line cap or deadline \u2014 the list below may be incomplete._
- _Deadline reached \u2014 remaining ${...} ${...} not scanned._
- _Enumeration cap reached \u2014 the ${...} first-enumerated of ${...} transcripts were considered; the most-recent selection is drawn from that subset, so a recent session in a project past the cap may be missing._
- _meta
- _No other git repos found under the home directory._
- _No repos found before the walk was cut short \u2014 treat this as unknown, not as none._
- _none listed ${...}_
- _none listed_
- _NOT GATHERED \u2014 no home directory could be determined. Treat shell history as "not queryable here". Do not read history files yourself._
- _NOT GATHERED \u2014 no permission context was available to enforce permissions.deny, so no other project\u2019s transcripts were read._
- _NOT GATHERED \u2014 the user did not opt in at Q3, or was not asked before this ran. Treat shell history as "not queryable here". Do not read history files yourself._
- _NOT GATHERED \u2014 the user did not opt in to looking beyond this repo (Q3), or was not asked before this ran. No home-directory contents were read. Do not run your own filesystem search to fill this in._
- _NOT GATHERED \u2014 the user picked "just this project" (Q2), was not asked before this ran, or no permission context was available to enforce permissions.deny. No other project\u2019s transcripts were read. Do not read them yourself; use only the per-project section above._
- _NOT GATHERED \u2014 the user picked "just this project" (Q2), was not asked yet, or the policy gate is off. Do not fetch this yourself; infer the org posture from Repo facts and Q1 instead._
- _Not queryable here (nonessential traffic disabled or policy-restricted). ${...}_
- _Not queryable here (org/repo not derivable from origin remote \u2014 missing, an unsupported or GHE host, or not a plain owner/repo URL shape). ${...}_
- _Not queryable here (origin remote is not github.com \u2014 GHE/other hosts not yet supported). ${...}_
- ... 29035 more

## Added strings already covered
- - auto: Use the default effort level for your model
- - ultracode: xhigh + dynamic workflow orchestration (this session only)
- [Warning]
- @ for file paths
- Afternoon (12-18)
- Agent transcripts: ${...}
- Auto-compact
- Auto-compact is currently disabled (see /config)
- Auto-connect to IDE (external terminal)
- Auto-install IDE extension
- Auto-update channel
- Autocompact
- Autocompact buffer
- Balanced approach with standard implementation and testing
- Balanced approach with standard testing
- Channel notifications re-registered after reconnect
- Checking out branch
- Choose the default environment for cloud agents
- Claude Code on the web drafts a plan you can edit and approve
- Claude in Chrome enabled by default
- Claude is done using your computer
- CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting here.
- Commit, push, and open a PR
- Compaction canceled.
- Comprehensive implementation with extensive testing
- Comprehensive implementation with extensive testing and documentation
- Configure optional break reminders and quiet-hours nudges
- Configure the auto-compact window size
- Connect to an IDE for integrated development features.
- Connection error.
- Contains warnings
- Continue the current session in Claude Desktop
- Conversation copied to clipboard
- Copy Claude's last response to clipboard (or /copy N for the Nth-latest)
- Copy on select
- Copy the conversation to your system clipboard
- Copy to clipboard
- Create and manage scheduled remote Claude Code agents
- Current effort level: ${...} (${...})
- Current effort level: ultracode (xhigh + dynamic workflow orchestration; this session only)
- ... 124 more

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
- - `run_in_background` runs the command detached: it keeps running across turns and re-invokes you when it exits. No `&` needed.
- - `run_in_background`, `name`, and `mode` are unavailable here \u2014 only synchronous subagents.
- - ~/.claude/agent-memory/<agentType>/,
- - ${...} Suggested fix: ${...}
- - ${...}: ${...} (Tools: ${...})
- - Add experimental WebAssembly-based dependencies:
- - Add platform-specific dependencies:
- - Before producing ANY summary or analysis, you MUST explicitly describe what portion of the content you have read. ***If you did not read the entire content, you MUST explicitly state this.*** - If after a few attempts you cannot read the file (file not found, lines too long for Read's offset/limit, no shell access), STOP retrying. Summarize what you were able to read, explicitly state which portion you could not read and why, and proceed.
- - Check for outdated versions of sharp in the dependency tree:
- - Claude home: ${...}
- - Config file exists: ${...}
- - Config file: ${...}
- - Consult the installation documentation:
- - Ensure optional dependencies can be installed:
- - Ensure your package manager supports multi-platform installation:
- - Environment variable ${...}: ${...}
- - Error code: ${...}
- - Error killed: ${...}
- - Error signal: ${...}
- ... 15326 more
```

## Takeover Commands

```bash
node scripts/verify-upstream-compat.js --baseline 2.1.218 --skip-latest --native-windows-x64 --json
node scripts/generate-upstream-text-diff.js --to 2.1.218 --native-windows-x64
node scripts/promote-native-candidate.js --candidate <candidate-json> --platform windows
```

## Done Criteria

- Add the missing source-of-truth translations or guard fix on this branch.
- Re-run the native latest candidate workflow for this version.
- Only promote support metadata after native verification and display audit pass.
- Remove or update this handoff report before marking the PR ready.
