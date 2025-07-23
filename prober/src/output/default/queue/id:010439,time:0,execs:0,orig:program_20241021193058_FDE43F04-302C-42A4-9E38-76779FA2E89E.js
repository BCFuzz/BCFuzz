function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 100; v2++) {
        const v4 = new SharedArrayBuffer();
        new Uint16Array(v4);
    }
}
new F0();
new F0();
gc();
