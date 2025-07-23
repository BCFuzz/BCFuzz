function f1() {
    const o4 = {
        "maxByteLength": 1593,
    };
    const v6 = new ArrayBuffer(1593, o4);
    const v7 = new Float64Array(v6);
    v7.b = v7;
    return v7;
}
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
class C19 extends Date {
}
const v20 = new C19();
v20.toString = f1;
v20.toString().subarray().set(Float64Array);
gc();
