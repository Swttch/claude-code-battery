# claude-code-battery

[한국어](README.ko.md)

> ## This package moved to [`@swttch/extend-kit`](https://www.npmjs.com/package/@swttch/extend-kit)
>
> It is no longer maintained separately. New features and fixes land in `@swttch/extend-kit`.
>
> **Your code keeps working.** This package now re-exports the new one, so existing imports and the `ccb` command behave exactly as before. Nothing breaks if you do nothing today.

## Moving over

Change the package, and leave everything else alone:

```bash
npm uninstall claude-code-battery
npm install @swttch/extend-kit
```

```diff
- import { ClaudeCodeClient } from 'claude-code-battery';
+ import { ClaudeCodeClient } from '@swttch/extend-kit';
```

Every export keeps its name, and the `ccb` command is unchanged:

```bash
npm install -g @swttch/extend-kit
ccb oauth usage
```

Documentation now lives at **https://github.com/Swttch/extend-kit**.

## Why it moved

Swttch needs a handful of tools that cannot be bundled into the plugin — battery has to read the Claude Code login stored on *your* machine, and speech-to-text needs native binaries the plugin cannot carry. They now ship together as `@swttch/extend-kit` rather than as separate packages that each have to be discovered and installed.

Battery is one part of that kit, and its API did not change in the move.
