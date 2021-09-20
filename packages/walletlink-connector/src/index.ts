import { ConnectorUpdate } from '@sushi-web3-react/types'
import { AbstractConnector } from '@sushi-web3-react/abstract-connector'

const CHAIN_ID = 1

interface WalletLinkConnectorArguments {
  url: string
  appName: string
  appLogoUrl?: string
  darkMode?: boolean
}

export class WalletLinkConnector extends AbstractConnector {
  private readonly url: string
  private readonly appName: string
  private readonly appLogoUrl?: string
  private readonly darkMode: boolean

  public walletLink: any
  private provider: any

  constructor({ url, appName, appLogoUrl, darkMode }: WalletLinkConnectorArguments) {
    super({ supportedChainIds: [CHAIN_ID] })

    this.url = url
    this.appName = appName
    this.appLogoUrl = appLogoUrl
    this.darkMode = darkMode || false
  }

  public async activate(): Promise<ConnectorUpdate> {
    if (!this.walletLink) {
      const WalletLink = await import('walletlink').then(m => m?.default ?? m)
      this.walletLink = new WalletLink({
        appName: this.appName,
        darkMode: this.darkMode,
        ...(this.appLogoUrl ? { appLogoUrl: this.appLogoUrl } : {})
      })
      this.provider = this.walletLink.makeWeb3Provider(this.url, CHAIN_ID)
    }

    const account = await this.provider.send('eth_requestAccounts').then((accounts: string[]): string => accounts[0])

    return { provider: this.provider, chainId: CHAIN_ID, account: account }
  }

  public async getProvider(): Promise<any> {
    return this.provider
  }

  public async getChainId(): Promise<number> {
    return CHAIN_ID
  }

  public async getAccount(): Promise<null | string> {
    return this.provider.send('eth_accounts').then((accounts: string[]): string => accounts[0])
  }

  public deactivate() {}

  public async close() {
    this.provider.close()
    this.emitDeactivate()
  }
}
