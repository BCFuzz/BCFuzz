for (let v0 = 0; v0 < 5; v0++) {
    function f2() {
        return v0;
    }
    BigUint64Array[Symbol.iterator] = f2;
    const v8 = new Uint32Array(3);
    const v9 = new Uint16Array();
    try { v9["findLastIndex"](...v8, ..."findLastIndex", ...BigUint64Array); } catch (e) {}
}
gc();
