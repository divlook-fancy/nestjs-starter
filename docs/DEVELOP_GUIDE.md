# Develop Guide

## Url

- Local API : http://localhost:3000
- Swagger Ui : http://localhost:3000/swagger

## Path alias

| Alias | Path |
| - | - |
| ~app/ | ./src/app/ |
| ~plugins/ | ./src/plugins/ |
| ~services/ | ./src/services/ |
| ~interfaces/ | ./src/interfaces/ |
| ~/ | ./ |

수정 필요시 아래 파일을 수정하시면 됩니다.

- tsconfig.json > compilerOptions.paths
- package.json > jest.moduleNameMapper
