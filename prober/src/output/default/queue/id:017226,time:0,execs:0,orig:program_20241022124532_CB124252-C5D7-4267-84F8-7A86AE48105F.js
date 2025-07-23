function f2() {
    return 173;
}
Uint8Array.toString = f2;
const o5 = {
    "maxByteLength": 268435441,
};
const v7 = new ArrayBuffer(3304, o5);
const v8 = new Uint8Array(v7);
delete v8[Uint8Array];
gc();
