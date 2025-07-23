class C0 {
}
const v1 = new C0();
function f2(a3, a4, a5, a6) {
    return a4;
}
for (let i = 0; i < 25; i++) {
    async function f7(a8, a9, a10) {
        Object.defineProperty(v1, a9, { configurable: true, enumerable: true, get: f2, set: f2 });
        await a10;
        return C0;
    }
    f7();
}
gc();
