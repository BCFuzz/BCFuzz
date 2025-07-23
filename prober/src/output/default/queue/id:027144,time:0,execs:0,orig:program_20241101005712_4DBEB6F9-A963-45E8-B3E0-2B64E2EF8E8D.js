const v1 = [-2];
const v2 = new Uint8Array(v1, Uint8Array, Uint8Array);
async function f4(a5, a6, a7) {
    function f8(a9, a10) {
        function f11(a12) {
            const o15 = {
                "maxByteLength": 2312845920,
            };
            const v17 = new ArrayBuffer(750704325, o15);
            return v17;
        }
        f11();
        for (let v19 = 0; v19 < 5; v19++) {
            f11(Uint8Array);
            class C21 {
            }
            const o22 = {
            };
            new Proxy(C21, o22);
        }
        return f11;
    }
    a7.then = f8;
    return a7;
}
f4(f4, f4, f4);
const v28 = createGlobalObject().WebAssembly.compile(v2);
try { v28.then(v1, createGlobalObject); } catch (e) {}
gc();
