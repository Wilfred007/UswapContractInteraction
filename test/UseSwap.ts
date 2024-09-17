import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("UseSwap", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployUseSwap() {

    const [owner,] = await hre.ethers.getSigners();
    const ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

    const UseSwap = await hre.ethers.getContractFactory("UseSwap");
    const useSwap = await UseSwap.deploy(ROUTER_ADDRESS);

    return {useSwap, owner, ROUTER_ADDRESS};
  }

  describe("Deployment", function () {
    it("Should set the right router address", async function () {
      const { useSwap, owner , ROUTER_ADDRESS} = await loadFixture(deployUseSwap);
      expect(await useSwap.uniSwapRouter()).to.equal(ROUTER_ADDRESS);
    });
  });


});
