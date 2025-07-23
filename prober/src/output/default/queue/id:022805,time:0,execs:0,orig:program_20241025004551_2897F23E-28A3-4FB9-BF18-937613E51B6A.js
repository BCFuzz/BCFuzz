createGlobalObject();
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = `
        for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
        }
        const v25 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
        function f26(a27, a28) {
            return v25;
        }
        v25.set = f26;
        function f29(a30, a31) {
            Reflect.getOwnPropertyDescriptor(Uint8Array);
            Reflect.defineProperty(Uint8Array, a30, v25);
            return a30;
        }
        f29.call();
    `;
    eval(v14);
    eval(v14);
}
new F12();
gc();
