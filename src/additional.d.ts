/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  const asset: string;
  export default asset;
}

declare module '*.json' {
  const asset: { name: string };
  export default asset;
}
