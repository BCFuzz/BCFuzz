class C0 {
}
const v1 = new C0();
function f3() {
    return C0;
}
const v4 = f3();
const v7 = `
    const v9 = ("-13")[v4];
    const o10 = {
    };
    let v12;
    try { v12 = Uint32Array(v9, o10, 0.0); } catch (e) {}
    const v16 = Reflect.construct(Uint32Array, []).reverse(v12, v4, v4, Reflect, C0);
    v12 = "-13";
    Object.defineProperty(v1, "d", { configurable: true, enumerable: true, get: f3 });
    /[]/mdyvs;
    /\u{12345}/myvis;
    v16.indexOf();
    class C20 {
        static #e = "-13";
        [-1] = 7;
        static [7];
        static #c;
    }
`;
eval(v7);
gc();
