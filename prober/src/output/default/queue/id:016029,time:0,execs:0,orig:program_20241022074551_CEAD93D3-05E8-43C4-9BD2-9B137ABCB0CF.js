function f0() {
    return f0;
}
function f1(a2, a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        const v5 = /a\nW/vgi;
        function f6(a7, a8, a9, a10) {
            a7.test(a10);
            return a2;
        }
        try { f6(); } catch (e) {}
        f6(v5);
    }
}
f0[Symbol.toPrimitive] = f1;
new Date([f0]);
const v22 = new Int32Array(681);
v22.constructor = f0;
function f23(a24, a25, a26, a27) {
    a26.byteLength;
}
f23(Int32Array, 5n, Int32Array);
v22.map(f23);
gc();
