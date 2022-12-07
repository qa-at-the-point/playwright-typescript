# Test Automation with TypeScript and Playwright

This repo is meant to include examples, tests, pipelines, reports, etc., for anyone interested in using TypeScript with [Playwright](https://playwright.dev)

## Setup

This project uses [bun](https://bun.sh) to do all bundling, transpiling, packaging, etc. Also, if you're using [Gitpod](https://gitpod.io), then the setup is already complete!

### bun.js

1. Install bun and `source` if necessary

    ```bash
    curl -fsSL https://bun.sh/install | bash
    source ~/.bashrc
    ```

2. Install packages/dependencies from `package.json`

    ```bash
    npm install
    ```

3. Run some tests to validate setup. For example:

    ```bash
    bun test tests/palindrome.spec.ts
    ```
