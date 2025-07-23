function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = this;
}
const v2 = new F0();
const v3 = new F0();
function f4(a5, a6) {
    return v2;
}
v3.toString = f4;
new F0();
class C8 {
    #a = v2;
    7;
}
const v9 = new C8();
new Float32Array(1918);
new BigUint64Array();
function F17() {
    if (!new.target) { throw 'must be called with new'; }
}
new F17();
async function f20(a21, a22, a23) {
    function f24(a25, a26) {
        function f27(a28) {
            const o31 = {
                "maxByteLength": 2312845920,
            };
            new ArrayBuffer(750704325, o31);
            return a28;
        }
        f27(f20);
        f27();
        f27();
        for (let v37 = 0; v37 < 5; v37++) {
            f27();
        }
    }
    a23.then = f24;
    return a23;
}
function f39(a40, a41) {
    v9[undefined];
    return C8;
}
f20.then = f39;
f20(f20, f20, f20);
gc();
