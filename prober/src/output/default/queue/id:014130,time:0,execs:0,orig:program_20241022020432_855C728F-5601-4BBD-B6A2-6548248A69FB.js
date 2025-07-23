const v1 = new Int32Array();
const v4 = new Int8Array(255);
for (const v5 of v4) {
    const v6 = v1.buffer;
    const v7 = v6.resize;
    try { v7(v7, v5, v6); } catch (e) {}
}
gc();
