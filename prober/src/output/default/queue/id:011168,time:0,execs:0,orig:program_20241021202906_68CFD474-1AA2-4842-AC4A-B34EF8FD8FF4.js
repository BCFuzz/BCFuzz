function f0() {
    const o3 = {
        "maxByteLength": 1593,
    };
    const v5 = new ArrayBuffer(1593, o3);
    const v7 = new Float64Array(v5);
    return v7;
}
class C9 extends Date {
}
const v10 = new C9();
v10.toString = f0;
v10.toString(C9, C9).buffer;
gc();
