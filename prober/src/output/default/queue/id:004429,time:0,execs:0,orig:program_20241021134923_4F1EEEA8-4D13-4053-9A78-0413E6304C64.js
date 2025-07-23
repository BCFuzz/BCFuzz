const v6 = new Float32Array();
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
}
const v13 = new F8(undefined, Float32Array, undefined);
const v14 = new F8(128, v13, v13);
const v16 = `
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
    class C22 {
        #o(a24) {
        }
    }
    try { C22.call(Float32Array); } catch (e) {}
    const v27 = Symbol.toPrimitive;
    o21.h = v18;
    function f29(a30, a31) {
        return o21;
    }
    const v32 = f29(v18, v13);
    f29(undefined, v14);
    f29(v32, v13);
    try { Reflect.deleteProperty(v6, "-13"); } catch (e) {}
    const v38 = Reflect.construct(Uint32Array, [Reflect,Reflect,Reflect,Reflect,Reflect]);
    v38.byteOffset;
    let v41;
    try { v41 = ArrayBuffer(ArrayBuffer); } catch (e) {}
    const o43 = {
        "h": BigUint64Array,
        "g": v41,
        "f": o19,
        [v32]: 4294967295,
        3: 128,
        "maxByteLength": 3411385984,
    };
    const v45 = new ArrayBuffer(9, o43);
    const v47 = new Uint8ClampedArray(v45);
    const v48 = v47?.constructor;
    try { v48(193, 2, 193); } catch (e) {}
    v38.reverse();
    o21.e = v18;
    o21.a = v16;
    const o51 = {
    };
    o51.e = o51;
    o51.h = v18;
    o51.e = v18;
    o51.d = 512;
    class C52 {
        static #a;
        #toString(a54, a55, a56) {
            f29(this, v27);
        }
    }
`;
eval(v16);
gc();
