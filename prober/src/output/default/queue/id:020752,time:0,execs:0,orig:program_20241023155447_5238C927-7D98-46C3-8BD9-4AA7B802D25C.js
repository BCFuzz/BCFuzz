const v2 = new BigInt64Array();
function f3() {
    return BigInt64Array;
}
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new F5(F5, F5, F5);
const v11 = v10.constructor;
let v12;
try { v12 = v11(); } catch (e) {}
const v13 = new F5(Int8Array, Int8Array, Int8Array);
const v15 = `
    ("-13")[2];
    const v18 = ("-13")[undefined];
    const o19 = {
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
    Uint32Array.name;
    Uint32Array.d = Uint32Array;
    function f24(a25, a26) {
    }
    const v27 = f24(v18, v10);
    const v28 = f24(undefined, v13);
    f24(v27, v10);
    try { Reflect.deleteProperty(Reflect, Int8Array); } catch (e) {}
    const v33 = Reflect.construct(Uint32Array, []);
    const v34 = v33.fill();
    try { v34.slice(F5, F5); } catch (e) {}
    const v36 = v33.reverse();
    try { v36.sort(undefined); } catch (e) {}
    const v38 = v36.forEach;
    let v39;
    try { v39 = v38(); } catch (e) {}
    o21.e = v18;
    o21.a = v15;
    const o40 = {
    };
    let v41;
    try { v41 = v36(); } catch (e) {}
    v33.f = v41;
    [];
    let v43 = f3();
    v43 = v18;
    -9223372036854775807 && -9223372036854775807;
    v39 ** -9223372036854775807;
    Math.imul(v39, -9223372036854775807);
    Math.sqrt(-9223372036854775807);
    [];
    [-1,v2,v38,,];
    class C52 extends Uint32Array {
        static [v12] = v28;
    }
`;
eval(v15);
gc();
