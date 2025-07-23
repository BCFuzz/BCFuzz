function f0() {
}
const v1 = f0();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F3();
const v9 = new F3();
const v13 = `
    const v15 = ("-13")[undefined];
    const o16 = {
    };
    o16.h = o16;
    o16.h = v15;
    const o17 = {
    };
    o17.h = v15;
    o17.e = v15;
    const o18 = {
    };
    o18.h = v15;
    function f20(a21, a22) {
        const v23 = a22?.constructor;
        try { v23(v23); } catch (e) {}
    }
    const v25 = f20(v15, v8);
    f20(undefined, v9);
    f20(v25, v8);
    const v30 = Reflect.construct(Uint32Array, [Reflect,Reflect,Reflect,Reflect,Reflect]);
    try { v30.fill(v1); } catch (e) {}
    const v32 = v30.reverse();
    const v33 = v32?.forEach;
    try { new v33(v32); } catch (e) {}
    o18.a = v13;
    const o35 = {
    };
    o35.d = 512;
    class C36 {
        static #a;
        static #e = "-13";
        [-1] = 7;
        static [7];
        static #c;
        [512];
    }
    new C36();
`;
eval(v13);
gc();
