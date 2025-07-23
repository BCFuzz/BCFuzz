const v5 = new Float32Array();
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
}
const v12 = new F7();
const v13 = new F7();
const v14 = `
    const v16 = ("-13")[undefined];
    const o17 = {
    };
    o17.h = o17;
    o17.h = o17;
    o17.h = o17;
    o17.h = v16;
    const o18 = {
    };
    o18.c = o18;
    o18.h = v16;
    o18.e = v16;
    const o19 = {
    };
    o19.e = o19;
    o19.h = o19;
    o19.h = o19;
    class C20 {
        #o(a22) {
        }
    }
    try { C20.isPrototypeOf("0"); } catch (e) {}
    try { C20.call(Float32Array); } catch (e) {}
    const v26 = Symbol.toPrimitive;
    o19.h = v16;
    Uint32Array.e = Uint32Array;
    function f28(a29, a30) {
        return o19;
    }
    const v31 = f28(v16, v12);
    const v32 = v31.e;
    try { v32(); } catch (e) {}
    const v34 = f28(undefined, v13);
    try { v34.__defineSetter__(v16, v16); } catch (e) {}
    const v37 = f28(v31, v12)?.e;
    try { v37(); } catch (e) {}
    try { Reflect.getOwnPropertyDescriptor(v31, o19); } catch (e) {}
    let v41;
    try { v41 = Reflect.deleteProperty(v5, "-13"); } catch (e) {}
    v41 && v41;
    const v43 = !v41;
    v43 || v43;
    const v45 = [Reflect,Reflect,Reflect,Reflect,Reflect];
    try { v45.filter(v31); } catch (e) {}
    try { v45.entries(); } catch (e) {}
    const v48 = Reflect.construct(Uint32Array, v45);
    try { v48.join(BigUint64Array); } catch (e) {}
    v48.byteOffset;
    let v52;
    try { v52 = ArrayBuffer(ArrayBuffer); } catch (e) {}
    3411385984 - 3411385984;
    const o55 = {
        "h": BigUint64Array,
        "g": v52,
        "f": o17,
        [v31]: 4294967295,
        3: 128,
        "maxByteLength": 3411385984,
    };
    const v57 = new ArrayBuffer(9, o55);
    const v58 = v57?.slice;
    try { v58(Reflect, v45); } catch (e) {}
    v57.detached;
    new Uint8ClampedArray(v48, v48, v5);
    const o74 = {
        toString(a64, a65) {
            const v67 = this.__proto__.toLocaleString();
            const t74 = v67?.includes;
            t74(o17);
            const v70 = v67.constructor;
            v70(ArrayBuffer);
            return v70.fromCharCode().charCodeAt(v45);
        },
    };
    class C75 {
        #toString(a77, a78, a79) {
            f28(this, v26);
        }
    }
`;
eval(v14);
gc();
