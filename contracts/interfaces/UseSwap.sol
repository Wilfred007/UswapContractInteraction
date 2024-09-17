// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;
import "./IUniwsapV2Router.sol";

contract UseSwap {


    address public uniSwapRouter;
    address owner;
    uint swapCOunt;
    // bool swapStatus;
  



    constructor(address _uniSwapRouter) {
        uniSwapRouter = _uniSwapRouter;
        owner = msg.sender;
    }

    function handleSwap (
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external {
            IUniswapV2Router(uniSwapRouter).swapExactTokensForTokens(
              amountIn,
            amountOutMin,
             path,
             to,
             deadline
            );
        swapCOunt += 1;

    }
}