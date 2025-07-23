for (let v2 = 0; v2 < 5; v2++) {
    const v6 = new Uint32Array(3);
    const v7 = new Uint16Array();
    try { v7["findLastIndex"](...v6, ..."findLastIndex", ...BigUint64Array); } catch (e) {}
}
[168,Uint16Array];
gc();
