/DH/mysu;
const v4 = /(?<a>.)/mds;
const v5 = /ab\b\d\bcd/myu;
const v6 = [v5,v4];
const v7 = [v6];
const v8 = [v5,v4,"string",v7,v7];
function f9(a10, a11, a12) {
    const o19 = {
        [-1]: a10,
        [a11](a14, a15, a16, a17) {
            function f18() {
                return a11;
            }
            super.e >>>= a11;
            return a14;
        },
        ...v4,
        "c": v7,
        "f": v8,
    };
    return o19;
}
f9(v7, f9(v6, "string", v8), v8);
f9(v7, f9, v8);
const v23 = `callee`;
const v24 = [5.0,-1000000.0,9.930868605520413,-Infinity,-1.7976931348623157e+308,-3.0,-5.874149474342256e+307,1.2687522835675878e+308,-1000000000000.0];
v24.value = v23;
const v28 = createGlobalObject().WebAssembly.Global;
try { new v28(v24); } catch (e) {}
for (let i32 = -3, i33 = 10; i33--, i32 < i33;) {
    for (let i42 = -3, i43 = 10;
        (() => {
            const v44 = i42 < i43;
            const o48 = {
                "maxByteLength": 268435456,
            };
            let v49 = 255;
            let v50 = v49++;
            v50--;
            const o52 = {
            };
            o52.g = o52;
            o52.f = o52;
            const v53 = Uint8Array | o52;
            const v54 = new ArrayBuffer(v49, o48);
            Float32Array.length = Float32Array;
            const v56 = new Float32Array(v54);
            v56.g = v56;
            v53 in v56;
            return v44;
        })();
        i43--) {
    }
    for (let i73 = (() => {
            for (let i65 = 0, i66 = Uint16Array; i65 < i66;) {
            }
            return 0;
        })();
        i73 < -2087855664;
        ) {
    }
}
gc();
