const v0 = [];
const v2 = new Date();
class C3 extends Date {
    b;
    m(a5) {
        const v9 = "object";
        const v12 = +4294967297;
        const v13 = "object" | v12;
        Math.clz32(this);
        const v16 = ("object" >>> 4294967297) / v13;
        Math.acosh(v12);
        Math.expm1(v16);
        function F19(a21) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = a21;
            this.e = v2;
            this.d = v0;
        }
        new F19(F19);
        const v23 = new F19(F19);
        new F19(F19);
        return v23;
    }
}
new C3();
new C3();
new C3();
new BigInt64Array(127);
new Uint8ClampedArray(255);
new Uint16Array(129);
const o42 = {
    "maxByteLength": 268435441,
};
const v44 = new SharedArrayBuffer(56, o42);
const v46 = new BigInt64Array(v44);
for (let i49 = 0, i50 = 10; i50--, i49 < i50;) {
    createGlobalObject().Atomics.notify(v46);
}
gc();
