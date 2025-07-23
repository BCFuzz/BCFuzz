const v2 = new BigInt64Array();
let v5;
try { v5 = Float32Array.from(undefined, v2); } catch (e) {}
let v6;
try { v6 = v5.sort(); } catch (e) {}
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
}
const v13 = new F8();
const v14 = v13.constructor;
let v15;
try { v15 = v14(); } catch (e) {}
const v16 = new F8();
let v18 = -(-1);
const v19 = v18--;
const v20 = `
    const v22 = ("-13")[undefined];
    const o23 = {
        4: v22,
        "e": "-13",
        "f": v6,
        "a": v2,
        "h": F8,
    };
    o23.h = o23;
    o23.h = v22;
    const o24 = {
    };
    o24.h = v22;
    o24.e = v22;
    const o25 = {
    };
    o25.h = o25;
    o25.h = v22;
    const t34 = "-13";
    t34[2864861198] = v19;
    o23[undefined] &= 880;
    Uint32Array.d = Uint32Array;
    function f27(a28, a29) {
        return v19;
    }
    class C30 {
        static 2551994144 = C30;
        536870888;
    }
    new C30();
    const v32 = f27(v22, v13);
    const v33 = f27(undefined, v16);
    f27(v32, v13);
    Reflect.construct(Uint32Array, []);
    class C38 extends Uint32Array {
        static [v15] = v33;
    }
`;
eval(v20);
gc();
