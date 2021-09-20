# `sushi-web3-react` Documentation - Ledger

- [Install](#install)
- [Arguments](#arguments)
- [Example](#example)

## Install
`yarn add @sushi-web3-react/ledger-connector`

## Arguments
```typescript
chainId: number
url: string
pollingInterval?: number
requestTimeoutMs?: number
accountFetchingConfigs?: any
baseDerivationPath?: string
```

## Example
```javascript
import { LedgerConnector } from '@sushi-web3-react/ledger-connector'

const ledger = new LedgerConnector({ chainId: 1, url: '...' })
```
