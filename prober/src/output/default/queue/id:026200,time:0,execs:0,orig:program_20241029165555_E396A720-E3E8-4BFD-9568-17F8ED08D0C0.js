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
    v14[Symbol.toPrimitive] = f12;
    const v18 = createGlobalObject();
    try { v18.load(v14); } catch (e) {}
`;
eval(v9);
for (let i24 = 0, i25 = 10; i25--, i24 < i25;) {
}
for (let i34 = -3, i35 = 512; i34 !== i35; i35--) {
}
gc();
