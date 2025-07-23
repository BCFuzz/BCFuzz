for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        const v4 = new Uint8ClampedArray();
        Int32Array.from(v4);
        let v7 = 158;
        const v9 = new Float32Array();
        v9.reverse();
        const v12 = SharedArrayBuffer.constructor;
        v12();
        const o14 = {
        };
        const v15 = new SharedArrayBuffer();
        new Uint8ClampedArray(v15);
        class C17 {
            static valueOf(a19, a20, a21, a22) {
                v7 += a20;
            }
        }
        const v23 = new C17();
        const v24 = v23.__lookupGetter__;
        try { v24(); } catch (e) {}
        const v26 = new C17();
        try { v26.constructor(); } catch (e) {}
        const v28 = [1000000.0,Infinity,-905874.1501267307,0.7252605056964067,-0.0,2.2250738585072014e-308,0.31775135766944107,-0.0];
        const v29 = v28.constructor;
        const v31 = new Int8Array();
        class C32 {
        }
        v29();
        const v35 = v28.values().next();
        const v36 = `
        `;
        v36.split(v35, v31);
        eval(v36);
        const v40 = new Int32Array(v4, v12);
        const v41 = v40.byteOffset;
        v41 - v41;
    }
    const v44 = new Uint16Array(v0, v0, v0);
    try { v44["findLastIndex"](); } catch (e) {}
    new F1();
    function F48(a50, a51) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v52 = new F48(v44, Uint16Array);
    const v53 = v52.constructor;
    try { v53(); } catch (e) {}
}
gc();
