let v0 = undefined;
const v2 = new Float64Array();
const v6 = new Float32Array();
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
}
const v13 = new F8();
const v14 = new F8(v0, F8, Float64Array);
const v16 = `
    const v18 = ("-13")[undefined];
    const o19 = {
    };
    o19.h = o19;
    o19.h = o19;
    o19.h = o19;
    o19.h = v18;
    const o20 = {
    };
    o20.e = o20;
    o20.h = v18;
    o20.e = v18;
    const o21 = {
    };
    o21.e = o21;
    o21.h = o21;
    o21.h = o21;
    class C22 {
        #o(a24) {
        }
    }
    try { C22.toString(); } catch (e) {}
    try { C22.call(Float32Array); } catch (e) {}
    const v28 = Symbol.toPrimitive;
    o21.h = v18;
    Uint32Array.e = Uint32Array;
    function f30(a31, a32) {
        return o21;
    }
    const v33 = f30(v18, v13);
    const v34 = f30(undefined, v14);
    try { v34.__defineSetter__(v18, v18); } catch (e) {}
    f30(v33, v13);
    try { Reflect.preventExtensions(f30); } catch (e) {}
    let v39;
    try { v39 = Reflect.getOwnPropertyDescriptor(v33, o21); } catch (e) {}
    let v40;
    try { v40 = Reflect.deleteProperty(v6, "-13"); } catch (e) {}
    !v40;
    for (let v42 = 0; v42 < 5; v42++) {
        const v43 = f30(undefined, 512);
        v43.h = v43;
    }
    v0 = o21;
    v40 &&= v2;
    new Uint8ClampedArray(v18, 6, v39);
    const o53 = {
        toString(a47, a48) {
            this.toString;
            const v50 = this.__proto__;
            const v51 = v50.hasOwnProperty(v50);
            v51 && v51;
            return v51;
        },
    };
    o53.toString();
    class C55 {
        #toString(a57, a58, a59) {
            f30(this, v28);
        }
    }
`;
eval(v16);
gc();
