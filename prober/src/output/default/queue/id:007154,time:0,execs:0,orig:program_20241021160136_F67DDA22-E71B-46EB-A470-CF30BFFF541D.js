function f0() {
    const v2 = new Uint16Array();
    const v3 = [13,-1979785640,268435441,-1073741824,-9007199254740991,-45599,12368];
    let v4;
    try { v4 = v3.every(); } catch (e) {}
    function f5(a6, a7) {
        return a7;
    }
    const v8 = f5();
    let v9 = typeof v8;
    v2.byteOffset -= v9 &&= v4;
    for (let v10 = 0; v10 < 250; v10++) {
    }
    return v8;
}
f0();
gc();
