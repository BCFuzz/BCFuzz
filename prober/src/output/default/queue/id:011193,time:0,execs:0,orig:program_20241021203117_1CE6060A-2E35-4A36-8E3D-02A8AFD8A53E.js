function f1() {
    const o4 = {
        "maxByteLength": 1593,
    };
    const v6 = new ArrayBuffer(1593, o4);
    const v8 = new Float64Array(v6);
    return v8;
}
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
class C20 extends Date {
}
const v21 = new C20();
v21.toString = f1;
v21.toString().subarray(16, 16);
gc();
