async function* f0(a1, a2, a3) {
}
for (let v4 = 0; v4 < 5; v4++) {
    f0();
    const v7 = new Int32Array();
    let v8;
    try { v8 = v7(); } catch (e) {}
    const v11 = new Uint8Array(3129);
    for (const v12 in v11) {
        v8 + v12;
    }
}
gc();
