const v2 = new Int16Array(241);
function f4() {
    const o7 = {
        "maxByteLength": 1593,
    };
    const v9 = new ArrayBuffer(1593, o7);
    const v11 = new Float64Array(v9);
    return v11;
}
class C13 extends Date {
}
const v14 = new C13();
v14.toString = f4;
for (const v16 of v14.toString(C13, Date)) {
    new Float32Array(v16, v16, ...v2);
}
gc();
