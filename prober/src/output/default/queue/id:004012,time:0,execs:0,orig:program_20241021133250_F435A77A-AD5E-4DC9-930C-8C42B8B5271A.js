function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F1(undefined, F1, F1);
const v7 = new F1(v6, v6, v6);
const v9 = `
    const v11 = ("-13")[undefined];
    const o12 = {
    };
    o12.h = v11;
    const o13 = {
    };
    o13.h = v11;
    o13.e = v11;
    const o14 = {
    };
    class C15 {
        #o(a17) {
        }
    }
    Symbol.toPrimitive;
    o14.h = v11;
    function f21(a22, a23) {
        return f21;
    }
    const v24 = f21(v11, v6);
    f21(undefined, v7);
    f21(v24, v6);
    Reflect.construct(Uint32Array, [Reflect,Reflect,Reflect,Reflect,Reflect]).reverse();
    o14.e = v11;
    o14.a = v9;
    const o31 = {
    };
    o31.h = v11;
    o31.e = v11;
    o31.d = 512;
    class C32 {
        static #a;
    }
`;
eval(v9);
gc();
