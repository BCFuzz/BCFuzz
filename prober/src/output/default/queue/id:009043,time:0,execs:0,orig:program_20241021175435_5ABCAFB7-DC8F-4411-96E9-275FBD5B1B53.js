for (let v1 = 0; v1 < 5; v1++) {
    const v2 = new Uint16Array();
    const v3 = v2.slice;
    try { v3(v2, Uint16Array); } catch (e) {}
}
gc();
