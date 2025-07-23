const v1 = new Uint16Array();
function f2() {
    const v5 = new Uint8ClampedArray(2502);
    for (const v6 in v5) {
        const v7 = v5[-1];
        v5[268435441] = v7;
        try { v7(); } catch (e) {}
    }
}
v1.toString = f2;
v1[1] = v1;
gc();
