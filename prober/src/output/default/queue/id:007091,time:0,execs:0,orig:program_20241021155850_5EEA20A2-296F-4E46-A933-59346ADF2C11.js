function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
const o8 = {
    [F0](a4, a5, a6, a7) {
    },
};
const v11 = new Int8Array(255);
for (const v12 in v11) {
    const v14 = new WeakMap();
    v14[v12];
    for (let v16 = 0; v16 < 250; v16++) {
    }
    class C17 {
        constructor(a19, a20, a21) {
            super.toString();
        }
    }
    new C17();
}
gc();
