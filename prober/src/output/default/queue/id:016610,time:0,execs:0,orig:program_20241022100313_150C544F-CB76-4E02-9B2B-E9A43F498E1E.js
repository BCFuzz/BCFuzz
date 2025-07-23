const v1 = new Uint16Array();
for (let v2 = 0; v2 < 5; v2++) {
    const v3 = v1.buffer;
    let v4;
    try { v4 = v3.transfer(); } catch (e) {}
    const v5 = v4?.transferToFixedLength;
    try { v5(v5, v1, v2, v1, v5); } catch (e) {}
}
gc();
