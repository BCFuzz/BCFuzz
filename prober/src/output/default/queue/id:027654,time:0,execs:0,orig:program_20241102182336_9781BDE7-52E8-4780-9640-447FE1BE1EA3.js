function f0() {
}
const v2 = new WeakSet();
function f3(a4, a5, a6) {
    const o11 = {
        m(a8, a9, a10) {
        },
    };
    return o11;
}
const v12 = f3(v2, v2, f3);
const v13 = f3(f3, f0, f3);
const v14 = f3();
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
}
new F15(v14, v12);
new F15(v13);
const v22 = [-2];
class C23 {
}
("f").indexOf();
const v26 = new Uint8Array();
async function f28(a29, a30, a31) {
    function f32(a33, a34) {
        function f35(a36) {
            const o39 = {
                "maxByteLength": 2312845920,
            };
            const v41 = new ArrayBuffer(750704325, o39);
            return v41;
        }
        f35(a31);
        for (let v43 = 0; v43 < 5; v43++) {
            f35(Uint8Array);
        }
        return a34;
    }
    a31.then = f32;
    return a31;
}
f28.then = createGlobalObject;
f28(f28, f28, f28);
function f46(a47, a48, a49, a50) {
}
gc();
const v55 = createGlobalObject().WebAssembly.compile(v26);
try { v55.then(v22, createGlobalObject); } catch (e) {}
gc();
