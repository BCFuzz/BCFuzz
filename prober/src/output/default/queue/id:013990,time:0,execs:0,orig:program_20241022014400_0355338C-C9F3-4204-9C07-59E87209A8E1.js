function f0() {
    return f0;
}
const o4 = {
    "maxByteLength": 1024,
};
const v6 = new SharedArrayBuffer(1024, o4);
Reflect.construct(Uint16Array, [v6], f0);
gc();
