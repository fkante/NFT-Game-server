const hardhat = require("hardhat");

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Zelda", "Lin Lin", "Akatsuki"], // Names
    [
      "https://i.imgur.com/VQ0LvSc.png",
      "https://i.imgur.com/rMo8WKr.png",
      "https://i.imgur.com/8GwT2dS.png",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    "Berserk",
    "https://i.imgur.com/TKh4JC4.png",
    50000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done deploying and minting!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
