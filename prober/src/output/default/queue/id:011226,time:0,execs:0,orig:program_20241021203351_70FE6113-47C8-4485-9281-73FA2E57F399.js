for (let v0 = 0; v0 < 10; v0++) {
    let v2 = 53;
    const v3 = v2++;
    const v5 = new Int8Array(v2);
    const v7 = new Float32Array(8);
    const v8 = [Float32Array,Float32Array,Float32Array,Float32Array,Float32Array];
    const v9 = [v3,v3,v3];
    const v10 = v8.__proto__;
    try { v10(v10, ...v9, ...v9, ...v5, ...v7, ...v7, ...v10); } catch (e) {}
}
gc();
