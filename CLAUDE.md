# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 이 저장소는 껍데기다

`claude-code-battery` 의 내용물은 **[@swttch/extend-kit](https://github.com/Swttch/extend-kit) 으로 옮겨졌다.** 여기 남은 것은 기존 사용자를 끊지 않기 위한 얇은 재노출 층뿐이다.

**기능 작업은 여기서 하지 않는다.** 코드를 고칠 일이 생기면 extend-kit 저장소에서 한다.

## 왜 지우지 않았나

이 패키지는 월 3천여 회 설치되고 있었고, 그중 일부는 플러그인이 아니라 **사람이 직접 SDK로 import** 하고 있다. 패키지를 내리거나 export를 줄이면 그 코드가 조용히 깨진다.

그래서:

- `index.js` / `index.d.ts` 는 `export * from '@swttch/extend-kit'` 다. **내보내는 목록을 "우리가 쓰는 것"으로 추려내지 말 것** — 남의 빌드가 깨진다.
- `bin.ccb` 를 유지한다. 사용자가 직접 타이핑하는 이름이고, Swttch 백엔드도 `Command('ccb', ...)` 로 exec한다. 빼면 이미 설치한 사용자의 명령이 사라지고 사용량 패널이 `ccb_missing` 으로 죽는다.
- `cli.js` 는 재spawn이 아니라 **import** 다. 프로세스를 하나로 유지해야 argv·stdout·종료 코드·Ctrl-C 가 예전 그대로 동작한다.

## 구조

```
index.js     # export * from '@swttch/extend-kit'
index.d.ts   # 타입도 동일하게 재노출
cli.js       # ccb — extend-kit의 CLI를 같은 프로세스에서 실행
```

빌드 단계가 없다(순수 JS). 재노출만 하는 층에 컴파일을 두면 유지보수 부담만 는다.

## 검증 방법

extend-kit을 로컬에 링크한 뒤, **기존 사용자가 README를 보고 썼을 코드**가 그대로 도는지 확인한다.

```bash
npm link @swttch/extend-kit
node -e "import('claude-code-battery').then(m => console.log(Object.keys(m)))"
node cli.js oauth usage --json
```

## 표준언어

모든 소통은 **한글**로 진행합니다.
