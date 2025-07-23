const v0 = [];
function f1() {
}
const v2 = f1();
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F4();
const v10 = v9.length;
const v11 = v9.constructor;
const v12 = new F4(v2, v11, undefined);
const v16 = `
    const v18 = ("-13")[undefined];
    const o19 = {
        "maxByteLength": -1,
        __proto__: v10,
        1073741825: v10,
        ...v2,
        /*
        __proto__: v0,
        */
    };
    o19.h = o19;
    o19.h = v18;
    const o20 = {
    };
    o20.h = v18;
    o20.e = v18;
    const o21 = {
    };
    o21.h = o21;
    o21.h = v18;
    Uint32Array.d = Uint32Array;
    function f23(a24, a25) {
        return v9;
    }
    const v26 = f23(v18, v9);
    f23(undefined, v12);
    f23(v26, v9);
    const v31 = Reflect.construct(Uint32Array, [Reflect,Reflect,Reflect,Reflect,Reflect]);
    for (let i33 = 0; i33 < 6; i33++) {
        const v39 = Reflect[f23];
        Object.defineProperty(v11, 0, { enumerable: true, get: f1, set: f23 });
        v9[228004202] = v39;
    }
    try { v31.fill(v2); } catch (e) {}
    const v41 = v31.reverse();
    const v42 = v41?.forEach;
    try { v42(v42); } catch (e) {}
    try { v42(v41); } catch (e) {}
    o21.e = v18;
    o21.a = v16;
    const o45 = {
    };
    o45.c = o45;
    o45.h = o45;
    o45.h = v18;
    o45.e = v18;
    o45.d = 512;
    class C46 {
        static #a;
        static #e = "-13";
        [-1] = 7;
        static [7];
        static a = "-13";
        static #c;
        [512];
    }
    C46[7] = C46;
    new C46();
`;
eval(v10);
eval(v16);
const o51 = {
};
gc();
