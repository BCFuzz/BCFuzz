function f0(a1, a2) {
    class C3 {
    }
    with (C3) {
        new Uint16Array(C3);
    }
    return a2;
}
for (let v6 = 0; v6 < 25; v6++) {
    const v8 = new Uint8Array();
    v8.valueOf = f0;
    v8[9] = v8;
}
gc();
