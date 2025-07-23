for (let v0 = 0; v0 < 5; v0++) {
    const v1 = [];
    const v3 = new BigInt64Array(v0, v0, v0);
    v3.parameters = v1;
    const t4 = this.WebAssembly.Tag;
    const v7 = new t4(v3);
    const v8 = v7.type;
    try { v8(); } catch (e) {}
}
gc();
