function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F1();
const v7 = new F1();
const v11 = `
    const v13 = ("-13")[undefined];
    const o14 = {
    };
    o14.h = v13;
    const o15 = {
    };
    o15.h = v13;
    o15.e = v13;
    const o16 = {
    };
    o16.h = v13;
    function f18(a19, a20) {
        const o21 = {
            "e": a20,
        };
    }
    const v22 = f18(v13, v6);
    f18(undefined, v7);
    f18(v22, v6);
    Reflect.construct(Uint32Array, [Reflect,Reflect,Reflect,Reflect,Reflect]).reverse();
    o16.e = v13;
    o16.a = v11;
    const o29 = {
    };
    o29.h = v13;
    o29.e = v13;
    o29.d = 512;
    class C30 {
        static #a;
        static #e = "-13";
        [-1] = 7;
        static [7];
        static a = "-13";
        static #c;
        [512];
    }
`;
eval(v11);
gc();
