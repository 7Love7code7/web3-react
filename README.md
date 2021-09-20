# `sushi-web3-react` 🧰

_A simple, maximally extensible, dependency minimized framework for building modern [Ethereum dApps](https://ethereum.org/beginners/)_

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![Actions Status](https://github.com/NoahZinsmeister/sushi-web3-react/workflows/CI/badge.svg)](https://github.com/NoahZinsmeister/sushi-web3-react/actions)

| Packages                              | `@latest` Version                                                                                                                                                         | Size                                                                                                                                                                                 | Description                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| 🏠 **Core**                           |
| `@sushi-web3-react/core`                    | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/core/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/core/v/latest)                                       | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/core/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/core@latest)                                       | [React](https://reactjs.org/) Interface                                             |
| 🔌 **Connectors**                     |
| _Browser Extension/dApp Browser_      |
| `@sushi-web3-react/injected-connector`      | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/injected-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/injected-connector/v/latest)           | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/injected-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/injected-connector@latest)           | [Injected](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md) Connector |
| _Remote API_                          |
| `@sushi-web3-react/network-connector`       | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/network-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/network-connector/v/latest)             | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/network-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/network-connector@latest)             | [RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC) Connector                     |
| _QR Code_                             |
| `@sushi-web3-react/walletconnect-connector` | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/walletconnect-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/walletconnect-connector/v/latest) | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/walletconnect-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/walletconnect-connector@latest) | [WalletConnect](https://walletconnect.org/) Connector                               |
| `@sushi-web3-react/walletlink-connector`    | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/walletlink-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/walletlink-connector/v/latest)       | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/walletlink-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/walletlink-connector@latest)       | [WalletLink](https://www.walletlink.org/#/) Connector                               |
| _Hardware_                            |
| `@sushi-web3-react/ledger-connector`        | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/ledger-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/ledger-connector/v/latest)               | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/ledger-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/ledger-connector@latest)               | [Ledger](https://www.ledger.com/) Connector                                         |
| `@sushi-web3-react/trezor-connector`        | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/trezor-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/trezor-connector/v/latest)               | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/trezor-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/trezor-connector@latest)               | [Trezor](https://trezor.io/) Connector                                              |
| _Native_                              |
| `@sushi-web3-react/frame-connector`         | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/frame-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/frame-connector/v/latest)                 | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/frame-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/frame-connector@latest)                 | [Frame](https://frame.sh/) Connector                                                |
| _Hosted_                              |
| `@sushi-web3-react/authereum-connector`     | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/authereum-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/authereum-connector/v/latest)         | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/authereum-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/authereum-connector@latest)         | [Authereum](https://authereum.org/) Connector                                       |
| `@sushi-web3-react/fortmatic-connector`     | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/fortmatic-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/fortmatic-connector/v/latest)         | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/fortmatic-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/fortmatic-connector@latest)         | [Fortmatic](https://fortmatic.com/) Connector                                       |
| `@sushi-web3-react/portis-connector`        | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/portis-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/portis-connector/v/latest)               | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/portis-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/portis-connector@latest)               | [Portis](https://www.portis.io/) Connector                                          |
| `@sushi-web3-react/squarelink-connector`    | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/squarelink-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/squarelink-connector/v/latest)       | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/squarelink-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/squarelink-connector@latest)       | [Squarelink](https://squarelink.com/) Connector                                     |
| `@sushi-web3-react/torus-connector`         | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/torus-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/torus-connector/v/latest)                 | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/torus-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/torus-connector@latest)                 | [Torus](https://tor.us/) Connector                                                  |
| 🐉 **Low-Level**                      |
| `@sushi-web3-react/abstract-connector`      | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/abstract-connector/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/abstract-connector/v/latest)           | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/abstract-connector/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/abstract-connector@latest)           | Shared Connector Class                                                              |
| `@sushi-web3-react/types`                   | [![npm version](https://img.shields.io/npm/v/@sushi-web3-react/types/latest.svg)](https://www.npmjs.com/package/@sushi-web3-react/types/v/latest)                                     | [![minzip](https://img.shields.io/bundlephobia/minzip/@sushi-web3-react/types/latest.svg)](https://bundlephobia.com/result?p=@sushi-web3-react/types@latest)                                     | Shared [TypeScript](https://www.typescriptlang.org/) Types                          |

## Quickstart

[![Edit sushi-web3-react-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/NoahZinsmeister/sushi-web3-react/tree/v6/example?fontsize=14&hidenavigation=1&theme=dark)

## [Documentation](docs)

## Related Efforts

- [Web3Modal](https://github.com/web3modal/web3modal)

## Local Development

- Clone repo\
  `git clone https://github.com/NoahZinsmeister/sushi-web3-react.git`

- Install top-level dependencies\
  `yarn`

- Install sub-dependencies\
  `yarn bootstrap`

- Build and watch for changes\
  `yarn start`
