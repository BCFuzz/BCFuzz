function f0() {
    const o3 = {
        "maxByteLength": 1593,
    };
    const v5 = new ArrayBuffer(1593, o3);
    const v7 = new Float64Array(v5);
    return v7;
}
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
class C19 extends Date {
}
const v20 = new C19();
v20.toString = f0;
let {...v22} = v20.toString(v20);
gc();
