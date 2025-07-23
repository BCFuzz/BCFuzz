for (let i2 = -536870912, i3 = 10; i3; i3--) {
}
const v9 = `
    class C10 {
    }
    const v11 = new C10();
    function f12() {
        return v9;
    }
    /.I[\c!]/dis;
    const v14 = v11.constructor;
    /\u{12345}/myvis;
    v14[Symbol.toPrimitive] = f12;
    const v19 = createGlobalObject();
    try { v19.load(v14); } catch (e) {}
`;
eval(v9);
for (let i25 = 0, i26 = 10; i26--, i25 < i26;) {
}
for (let i35 = -3, i36 = 512; i35 !== i36; i36--) {
}
gc();
