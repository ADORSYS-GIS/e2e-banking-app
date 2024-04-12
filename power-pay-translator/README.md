# PowerPay Translator

## Getting started
- Install nvm
- Install openapi using nodejs
  ```shell
  npm install @openapitools/openapi-generator-cli -g
  ```
- Generate the OpenApi server crate
  ```shell
  openapi-generator-cli generate -i ../docs/pps-ppt.openapi.yaml -g rust-server -o crates/server-ppt --additional-properties packageName=server-ppt
  ```