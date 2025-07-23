const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
for (let v2 = 0; v2 < 5; v2++) {
    const v3 = v1.buffer;
    v3.detached;
    try { v3.transfer(); } catch (e) {}
}
gc();
