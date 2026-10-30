# Pi Playwright Browser Integration

## Goal
Expose the locally cached Playwright MCP server to Pi for user-authorized browser research and navigation.

## Guardrails
- Local MCP process only.
- No credentials, passwords, or 2FA handling.
- Connect to the already-open Daniel Chrome profile only through the browser extension.
- No automatic registration, submission, purchase, or publication.
- Keep browser access bounded to explicit user actions.
- Require Pi restart after MCP configuration changes.

## Tasks
- [x] Register the cached Playwright MCP server in the user Pi MCP configuration.
- [x] Validate the executable and configuration without opening authenticated sessions.
- [ ] Test public navigation after the new Pi session exposes the MCP tools.
- [x] Configure extension mode for the already-open Daniel Chrome profile.

## Evidence
- Cached executable: `C:/Users/Monoga/AppData/Local/npm-cache/_npx/51691537fc71f2b0/node_modules/.bin/playwright-mcp.cmd`
- Version verified: `0.0.79`
- Existing Pi config: `C:/Users/Monoga/.pi/agent/mcp.json`
