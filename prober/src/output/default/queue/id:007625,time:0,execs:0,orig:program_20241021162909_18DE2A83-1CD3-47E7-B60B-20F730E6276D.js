function f0() {
    return f0;
}
const v1 = [1073741823,-31070,-38381];
const v3 = new BigInt64Array();
const v5 = new BigUint64Array();
const v8 = [16,37822,-60486934,2086949201,1053840339];
const v9 = [-12,-656784266,-8,-32139,-13,10];
const v11 = `
    class C12 {
    }
    let v13;
    try { v13 = C12(); } catch (e) {}
    const v14 = new C12();
    try { v14.constructor(C12, C12, v13, v13, BigUint64Array); } catch (e) {}
    function f16(a17, a18, a19) {
        const o20 = {
        };
        return o20;
    }
    f16(C12);
    const v22 = f16(C12);
    v22.d = v22;
    v22.d = v22;
    for (let v23 = 0; v23 < 5; v23++) {
        v23 / v23;
        function F25() {
            if (!new.target) { throw 'must be called with new'; }
        }
        function F27() {
            if (!new.target) { throw 'must be called with new'; }
        }
        F27.h = F27;
        const v29 = new F27();
        const v30 = v29?.constructor;
        try { v30(); } catch (e) {}
        function F32(a34, a35) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = v29;
        }
        const v36 = new F32();
        try { v36.isPrototypeOf(v1); } catch (e) {}
        const v38 = new F32();
        let v39;
        try { v39 = v38.hasOwnProperty(5); } catch (e) {}
        for (let v40 = 0; v40 < 5; v40++) {
            class C43 {
                #d = 10n;
                static [10n] = 45373n;
            }
            C43[10] = C43;
            try { v39(v9); } catch (e) {}
            const v45 = v8[v14];
            const v47 = -1.184670302248617e+308 == WeakSet ? -1.184670302248617e+308 : WeakSet;
            try { v47(); } catch (e) {}
            try { v39(v45, 10n, f16, v47); } catch (e) {}
        }
        const o50 = {
        };
        o50.f = o50;
        try { o50(o50, o50, o50, o50); } catch (e) {}
        Uint8Array.d = Uint8Array;
        const o55 = {
            "apply": f0,
            "get": f16,
            "isExtensible": f0,
            "preventExtensions": f16,
        };
        const v56 = new Uint8Array(883);
        new Int16Array(v56);
        for (let v58 = 0; v58 < 5; v58++) {
            const v60 = new Uint16Array(v58, v58, v58);
            try { v60.sort(v5); } catch (e) {}
            v60.subarray().join(v3);
        }
    }
    const v64 = [65537,9007199254740992,38256,-18115,65535,9,1,-254833708];
    class C65 {
        static #e = v64;
    }
    const t80 = C65.constructor;
    t80();
`;
eval(v11);
gc();
