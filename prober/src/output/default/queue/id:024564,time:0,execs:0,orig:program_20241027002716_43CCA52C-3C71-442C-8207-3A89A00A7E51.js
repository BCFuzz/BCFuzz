const v0 = `
    /(\u{12345}D)/mdygisu;
`;
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
function f12() {
    return v0;
}
for (let v13 = 0; v13 < 25; v13++) {
    function F14() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v16 = new F14();
    v16.constructor = f12;
    class C18 {
    }
    const v19 = new C18();
    class C20 {
        constructor(a22, a23) {
            Reflect[v0];
            Reflect.__proto__ = v19;
            const v25 = a23.constructor;
            v25(v25, Reflect);
        }
        h;
    }
    const v27 = new C20(v16, v16);
    Object.defineProperty(v27, "constructor", { configurable: true, enumerable: true, value: f12 });
    new C20(v19, v27);
}
gc();
