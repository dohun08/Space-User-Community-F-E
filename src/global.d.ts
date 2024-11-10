// global.d.ts (또는 custom.d.ts)
declare module '*.svg' {
    const content: string;
    export default content;
}
