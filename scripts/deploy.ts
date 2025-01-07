import { ethers, upgrades } from "hardhat";
import { MyTokenV1 } from "../typechain-types";
import { Signer } from "ethers";

let myTokenProxy: MyTokenV1;
let deployer: Signer;

async function main() {
  // 取得合約工廠

  [deployer] = await ethers.getSigners();

  const MyTokenV1Factory = await ethers.getContractFactory(
    "MyTokenV1",
    deployer
  );

  // 使用 { kind: "transparent" } 來部署 Transparent Proxy
  const proxy = await upgrades.deployProxy(
    MyTokenV1Factory,
    ["MyToken", "MTK", 123], // 對應 initialize(name, symbol, initialValue)
    {
      kind: "transparent",
      initializer: "initialize", // 預設也是會呼叫同名方法
    }
  );
  await proxy.waitForDeployment();

  // 轉成你對應的介面 (TypeChain)，以便有型別推斷
  myTokenProxy = proxy as unknown as MyTokenV1;

  // 顯示 Proxy 合約地址
  console.log("myTokenProxy deployed to:", await myTokenProxy.getAddress());
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
