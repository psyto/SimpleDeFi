const { ethers } = require("hardhat");

function toWei(value) {
    return ethers.parseEther(value.toString());
}

function fromWei(value) {
    return ethers.formatEther(value);
}

module.exports = {
    toWei,
    fromWei,
};
