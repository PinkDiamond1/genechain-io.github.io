// const currentUrl = new URL(window.location.href)
// const forwarderOrigin = currentUrl.hostname === 'localhost' ? 'http://localhost:9010' : undefined

const checkNetwork = async () => {
  var addNet = $('#addNetBtn')
  addNet.on('click', function (e) {
    if (window.ethereum) {
      ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x50',
            chainName: 'GeneChain',
            nativeCurrency: { name: 'RNA', symbol: 'RNA', decimals: 18 },
            rpcUrls: ['https://rpc.genechain.io'],
            blockExplorerUrls: ['https://scan.genechain.io']
          }
        ]
      })
    } else {
      window.open('https://github.com/genechain-io/geneth/wiki/Metamask')
    }
  })
}

const initialize = () => {
  checkNetwork()
}

window.addEventListener('DOMContentLoaded', initialize)
