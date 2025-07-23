const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    const v8 = `
        /\u{12345}/myvis;
    `;
    const v12 = new Uint8Array(7);
    let v13;
    try { v13 = v12.setFromBase64(v8); } catch (e) {}
    return v13;
}
v2.map(f3);
gc();
