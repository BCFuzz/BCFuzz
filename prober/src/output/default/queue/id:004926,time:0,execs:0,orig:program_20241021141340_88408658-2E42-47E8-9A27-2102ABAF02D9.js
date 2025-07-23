function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2(undefined, F2, F2);
const v8 = new F2();
const v10 = `
    const v12 = ("-13")[undefined];
    const o13 = {
    };
    function f14(a15) {
        return v12;
    }
    Object.defineProperty(o13, "h", { set: f14 });
    o13.h = v12;
    const o16 = {
    };
    o16.h = 255;
    o16.h = v12;
    o16.e = v12;
    const o17 = {
    };
    class C18 {
        #o(a20) {
        }
    }
    Symbol.toPrimitive;
    o17.h = v12;
    function f24(a25, a26) {
        return Uint32Array;
    }
    const v27 = f24(v12, v7);
    f24(undefined, v8);
    f24(v27, v7);
    Reflect.construct(Uint32Array, [Reflect,Reflect,Reflect,Reflect,Reflect]).reverse();
    o17.e = v12;
    o17.a = v10;
    const o34 = {
    };
    o34.d = 512;
    class C35 {
        static #a;
    }
`;
eval(v10);
gc();
