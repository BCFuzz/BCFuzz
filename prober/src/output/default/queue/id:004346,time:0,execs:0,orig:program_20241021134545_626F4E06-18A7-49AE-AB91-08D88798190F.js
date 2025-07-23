for (let v0 = 0; v0 < 100; v0++) {
    const v2 = new BigUint64Array();
    try { v2.reduce(v0, v0); } catch (e) {}
}
gc();
