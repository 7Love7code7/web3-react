# `sushi-web3-react` Documentation - Torus

- [Install](#install)
- [Arguments](#arguments)
- [Example](#example)

## Install
`yarn add @sushi-web3-react/torus-connector`

## Arguments
```typescript
chainId: number
initOptions?: any
constructorOptions?: any
```

## Example
```javascript
import { TorusConnector } from '@sushi-web3-react/torus-connector'

const torus = new TorusConnector({ chainId: 1 })
```

Note: Once the connector has been activated, the Torus SDK instance can be accessed under the `.torus` property.
