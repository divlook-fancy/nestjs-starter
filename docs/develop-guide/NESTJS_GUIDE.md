# NestJs Guide

https://docs.nestjs.com/

## CLI

개발 편의를 위해 CLI 툴이 존재합니다. CLI 툴은 필수사항이 아닙니다. 본인이 필요하다고 생각되면 설치해주세요.

https://docs.nestjs.com/cli/overview

```bash
$ npm i -g @nestjs/cli
```

### nest generate

schematic를 기반으로 파일을 생성 및 수정할 수 있는 명령어입니다.

https://docs.nestjs.com/cli/usages#nest-generate

```bash
$ nest generate <schematic> <name> [options]
$ nest g <schematic> <name> [options]
```

##### cats 컨트롤러 생성 예제

```bash
$ nest g controller cats
```

## 기본 가이드

### 프로젝트 구조

```
root/
┃
┣ dist/ --------------------- build 디렉토리
┃ ┗ ...
┃
┣ docs/ --------------------- 문서 디렉토리
┃ ┗ ...
┃
┣ src/ ---------------------- source 디렉토리
┃ ┣ cats/
┃ ┃ ┣ dto/
┃ ┃ ┃ ┣ create-cat.dto.ts
┃ ┃ ┃ ┣ index.ts
┃ ┃ ┃ ┗ update-cat.dto.ts
┃ ┃ ┣ interfaces/
┃ ┃ ┃ ┗ cat.interface.ts
┃ ┃ ┣ cats.controller.spec.ts
┃ ┃ ┣ cats.controller.ts
┃ ┃ ┣ cats.module.ts
┃ ┃ ┣ cats.service.spec.ts
┃ ┃ ┗ cats.service.ts
┃ ┃
┃ ┣ app.controller.spec.ts
┃ ┣ app.controller.ts
┃ ┣ app.module.ts
┃ ┣ app.service.ts
┃ ┃
┃ ┗ main.ts ----------------- app의 인스턴스를 생성하기 위한 엔트리
┃
┗ test/ --------------------- test 디렉토리
  ┣ app.e2e-spec.ts
  ┗ jest-e2e.json
```

### Module

사용할 모듈을 작성합니다.

https://docs.nestjs.com/modules#feature-modules

##### File name

```
<name>.module.ts
```

##### Command

```bash
$ nest g module <name>
$ nest g mo <name>
```

### Controller

컨트롤러는 들어오는 요청을 처리하고 클라이언트에 응답을 반환합니다.

https://docs.nestjs.com/controllers

##### File name

```
<name>.controller.ts
```

##### Command

```bash
$ nest g controller <name>
$ nest g co <name>
```

### Service

서비스는 컨트롤러에서 사용할 비즈니스 로직을 작성합니다.

https://docs.nestjs.com/providers#services

##### File name

```
<name>.service.ts
```

##### Command

```bash
$ nest g service <name>
$ nest g s <name>
```

### Interface

##### File name

```
interfaces/<name>.interface.ts
```

##### Command

```bash
$ nest g interface <name>
```

### DTO

##### File name

```
dto/<name>.dto.ts
```
