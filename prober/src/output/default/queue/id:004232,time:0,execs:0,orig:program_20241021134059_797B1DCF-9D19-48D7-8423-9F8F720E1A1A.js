function f0() {
    const v5 = new Int8Array(53);
    const v7 = new Float32Array(8);
    const v8 = [8,8,8,8];
    const v9 = [v7];
    v7.g %= -9007199254740990;
    const v10 = v8.__proto__;
    try { v10(v10, ...v9, ...v9, ...v5, ...v7, ...v7); } catch (e) {}
    return v7;
}
f0();
f0();
f0();
gc();
