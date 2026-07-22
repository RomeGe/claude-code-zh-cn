# Windows native latest candidate failure: 2.1.217

- Run: https://github.com/RomeGe/claude-code-zh-cn/actions/runs/29895732050
- Head SHA: `72315ce54c4d22add62a299af56b386d5f4c5511`
- Status: `skip`
- Candidate kind: `native`
- Native: `unknown` / `unknown` / `unknown` / `unknown`
- Display audit: `unknown` (0 issues / unknown commands)

## What Failed

- Candidate verification did not pass: `status=skip`.
- Display audit did not report additional failures.
- Summary: pass=0, fail=0, skip=1.

## Display Audit Issues

- No display audit issues were reported.

## Text Diff Excerpt

```markdown
# Windows upstream text diff: unavailable

Text diff report failed; see workflow logs before treating this candidate as fully reviewed.
```

## Takeover Commands

```bash
node scripts/verify-upstream-compat.js --baseline 2.1.217 --skip-latest --native-windows-x64 --json
node scripts/generate-upstream-text-diff.js --to 2.1.217 --native-windows-x64
node scripts/promote-native-candidate.js --candidate <candidate-json> --platform windows
```

## Done Criteria

- Add the missing source-of-truth translations or guard fix on this branch.
- Re-run the native latest candidate workflow for this version.
- Only promote support metadata after native verification and display audit pass.
- Remove or update this handoff report before marking the PR ready.
