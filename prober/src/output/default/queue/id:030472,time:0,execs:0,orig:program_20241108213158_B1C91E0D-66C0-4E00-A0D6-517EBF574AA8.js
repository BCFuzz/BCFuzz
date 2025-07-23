function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = [1073741824];
    Reflect.construct(Int32Array, v5).subarray(v5).byteOffset;
}
new F0();
for (let i12 = 0, i13 = 1851; i13--, i12 < i13;) {
}
gc();
