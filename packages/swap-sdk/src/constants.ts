import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}
export enum CHAINKEY {
  NOVO = 'ETH',
  // OPTIMISTIC = 'OPTIMISTIC',
  // ARBITRUM = 'ARBITRUM',
  // POLYGON = 'POLYGON',
  // AVALANCH = 'AVALANCH',
  // FANTOM = 'FANTOM',
  // THETA = 'THETA',
}
export enum ChainId {
  NovoTestnet = 4466,
  NovoMainnet = 111,
}
export const FACTORY_ADDRESS: Record<ChainId, string> = {
  [ChainId.NovoTestnet]: '0xCCDeb9a29786a40661FE8cF925D12Ee84535f515',
  [ChainId.NovoMainnet]: '0xCCDeb9a29786a40661FE8cF925D12Ee84535f515',
}
export const INIT_CODE_HASH: Record<ChainId, string> = {
  [ChainId.NovoTestnet]: '0x797408b515a15fa66fdc3482901ced4a84592402f11be777c57a51174b43fc2c',
  [ChainId.NovoMainnet]: '0x797408b515a15fa66fdc3482901ced4a84592402f11be777c57a51174b43fc2c',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}
