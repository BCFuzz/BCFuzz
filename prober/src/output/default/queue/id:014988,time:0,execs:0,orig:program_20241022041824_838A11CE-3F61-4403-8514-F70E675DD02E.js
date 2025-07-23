new Int8Array(128, 128, 128);
const v4 = new Int32Array(128, 128, 128);
try {
    v4[306] **= 128;
} catch(e5) {
} finally {
    const v6 = v4.buffer;
    try { v6.resize(); } catch (e) {}
}
for (let v8 = 0; v8 < 250; v8++) {
}
gc();
