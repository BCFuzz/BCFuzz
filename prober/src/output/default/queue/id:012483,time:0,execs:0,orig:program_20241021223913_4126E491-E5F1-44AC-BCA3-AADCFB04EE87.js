const v3 = new Int8Array(53);
const v5 = new Float32Array(8);
const v6 = [v5,v5];
const v7 = [53];
const v8 = v6.__proto__;
try { v8(v8, ...v7, ...v7, ...v3, ...v5); } catch (e) {}
function f10() {
    const o13 = {
        "maxByteLength": 1593,
    };
    const v15 = new ArrayBuffer(1593, o13);
    const v17 = new Uint8Array(v15);
    return v17;
}
class C19 extends Date {
}
const v20 = new C19();
v20.toString = f10;
for (const v22 of v20.toString()) {
}
gc();
