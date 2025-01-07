# proxy docs:
https://docs.openzeppelin.com/upgrades-plugins/hardhat-upgrades
using transparent proxy 

# deploy to sepolia
myTokenProxy deployed to: 0x2b97e2EDE53C9733b9806536d149B142973088b6


Both need to verify on etherscan
v2:
0x844b2d768b3e0f99da3e7215b5c44b86a109ea07
v1:
0x7454e47774523971e6d0901ed69c38de48eaabf2

# set up env

`yarn hardhat vars set ALCHEMY_API_KEY "YOUR_TOKEN_HERE"`
`yarn hardhat vars set ETHERSCAN_API_KEY "YOUR_TOKEN_HERE"`

`npx hardhat vars list`


deploy & upgrade contract
```shell
run scripts
```shell
npx hardhat run ./scripts/<scriptName>.ts --network <network>
```

contract verification
```shell
npx hardhat run ./verify/<name>.ts --network <network> <contractAddress>
```


# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```
