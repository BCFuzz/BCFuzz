for (let v2 = 0; v2 < 5; v2++) {
    const v5 = new Uint32Array(666);
    const v6 = new Uint16Array();
    try { v6["findLastIndex"](...v5, ..."findLastIndex", ...BigUint64Array); } catch (e) {}
}
gc();
