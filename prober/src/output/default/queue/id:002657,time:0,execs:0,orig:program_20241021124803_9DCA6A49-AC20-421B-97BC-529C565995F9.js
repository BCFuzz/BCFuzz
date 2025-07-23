for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        const v4 = new Uint8ClampedArray();
        let v6 = 158;
        const v8 = new Float32Array(v4, 598, v6);
        v8.reverse();
        const o11 = {
        };
        const v12 = SharedArrayBuffer.constructor;
        try { new v12(); } catch (e) {}
        const o14 = {
        };
        const v15 = new SharedArrayBuffer(v0, v12);
        new Uint8ClampedArray(v15);
        class C18 {
            static valueOf(a20, a21, a22, a23) {
                v6 += a21;
                598 !== v4;
            }
        }
        const v25 = new C18();
        const v26 = v25.__lookupGetter__;
        try { new v26(); } catch (e) {}
        const v28 = new C18();
        try { v28.constructor(); } catch (e) {}
        const v30 = new C18();
        v30.toLocaleString(F1, v0, v12, o14, C18);
        const v33 = new Set();
        try { v33.forEach(v26); } catch (e) {}
        const v35 = [1000000.0,Infinity,-905874.1501267307,0.7252605056964067,-0.0,2.2250738585072014e-308,0.31775135766944107,-0.0];
        const v36 = v35.constructor;
        const v38 = new Int8Array(v8);
        class C39 {
        }
        v36();
        const v42 = v35.values().next();
        const v44 = `
        `;
        v44.split(v42, v38);
        eval(v44);
        const v49 = new Int32Array();
        const v50 = v49.byteOffset;
        v50 - v50;
    }
    3 >>> 3;
    const v56 = new Uint32Array();
    const v57 = new Uint16Array();
    Reflect.construct(Uint32Array, [v57,v57])[1];
    try { v57["findLastIndex"](v56); } catch (e) {}
    const v64 = new F1();
    v64.b = v64;
    function F65(a67, a68) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v69 = new F65();
    const v70 = v69.constructor;
    try { v70(v69); } catch (e) {}
}
const v73 = [[]];
const o74 = {
};
const v76 = new Proxy(v73, o74);
const v77 = v76.values;
try { new v77(); } catch (e) {}
gc();
