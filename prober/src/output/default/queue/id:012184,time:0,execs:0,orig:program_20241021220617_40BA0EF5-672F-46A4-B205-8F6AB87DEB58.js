function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = [1754061190,16,11,256,-62769,-256,8];
    function f9() {
        return a7;
    }
    const o10 = {
        __proto__: v8,
    };
    Object.defineProperty(v8, 10, { configurable: true, set: f9 });
}
new F2();
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
const v23 = new Int8Array(255);
for (const v24 in v23) {
    class C25 {
        constructor(a27, a28) {
            ([a28,a28]).push(99);
        }
    }
    new C25();
}
gc();
