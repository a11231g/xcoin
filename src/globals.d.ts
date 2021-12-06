//#region Ensure image file endings have a type for TypeScript
/**
 * These declarations tell TypeScript that we allow import of images, e.g.
 */
//#endregion

declare const window: any

declare module '@env' {
  export const TOKEN: string
  export const BASE_URL: string
}
