function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = [1073741824];
    Reflect.construct(Int32Array, v6, Float32Array).subarray(v6).byteOffset;
}
new F1();
for (let i13 = 0, i14 = 1851; i14--, i13 < i14;) {
}
gc();
