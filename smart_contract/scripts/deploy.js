const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const WasteMarketplace = await hre.ethers.getContractFactory("Waste");
  const waste = await WasteMarketplace.deploy();
  await waste.deployed();
  console.log("wasteMarketplace deployed to:", waste.address);

  fs.writeFileSync('./config.js', `
  export const wastemarketplaceAddress = "${waste.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
