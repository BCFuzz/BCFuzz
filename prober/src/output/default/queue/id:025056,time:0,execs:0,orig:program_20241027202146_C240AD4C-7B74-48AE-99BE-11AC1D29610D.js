new BigInt64Array();
new Int8Array();
new BigUint64Array();
new Int32Array();
new Int16Array();
function f10(a11) {
    a11.length = a11;
}
try { f10.call(); } catch (e) {}
class C14 {
    constructor(a16) {
        class C21 {
            constructor(a23, a24, a25, a26) {
                for (let i = 0; i < 10; i++) {
                    createGlobalObject();
                    new Uint8Array(a26);
                }
            }
        }
        const v30 = new C21();
        new C21(1000, -9007199254740991, v30, 4294967296);
    }
}
new C14(Float32Array);
new C14();
gc();
