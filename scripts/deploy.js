// const { ethers } = require("ethers");

async function main() {
    const myNft = await ethers.getContractFactory("MyNFT");
     myNft = await myNft.deploy();
    console.log("Contract Deployed to Addrress = ", myNft.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })    