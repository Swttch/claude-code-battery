# claude-code-battery

[English](README.md)

> ## 이 패키지는 [`@swttch/extend-kit`](https://www.npmjs.com/package/@swttch/extend-kit) 으로 통합되었습니다
>
> 더 이상 이 저장소에서 별도로 유지보수하지 않습니다. 새 기능과 수정은 `@swttch/extend-kit` 에 반영됩니다.
>
> **기존 코드는 그대로 동작합니다.** 이 패키지는 이제 새 패키지를 재노출하므로, 지금까지 쓰던 import와 `ccb` 명령이 이전과 똑같이 동작합니다. 오늘 아무것도 하지 않아도 깨지지 않습니다.

## 옮겨가기

패키지만 바꾸면 되고, 나머지는 그대로 두시면 됩니다.

```bash
npm uninstall claude-code-battery
npm install @swttch/extend-kit
```

```diff
- import { ClaudeCodeClient } from 'claude-code-battery';
+ import { ClaudeCodeClient } from '@swttch/extend-kit';
```

모든 export가 이름을 그대로 유지하며, `ccb` 명령도 바뀌지 않았습니다.

```bash
npm install -g @swttch/extend-kit
ccb oauth usage
```

문서는 이제 **https://github.com/Swttch/extend-kit** 에 있습니다.

## 왜 옮겼나

Swttch에는 플러그인 안에 넣을 수 없는 도구가 몇 가지 있습니다 — battery는 *사용자 본인의* 머신에 저장된 Claude Code 로그인을 읽어야 하고, 음성 입력(STT)은 플러그인이 실어 나를 수 없는 네이티브 바이너리가 필요합니다. 이것들을 각각 따로 찾아 설치하게 두는 대신, `@swttch/extend-kit` 하나로 함께 배포합니다.

battery는 그 kit의 한 부분이며, 옮기는 과정에서 API는 바뀌지 않았습니다.
