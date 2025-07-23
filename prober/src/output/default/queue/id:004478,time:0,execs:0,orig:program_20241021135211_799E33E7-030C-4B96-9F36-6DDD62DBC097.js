function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a10;
    }
    const v11 = new F7();
    for (let i13 = 10, i14 = 10; -13369 < i14; i14--) {
        v11[v11] = -3;
    }
    new Uint8Array(210);
}
new F0();
gc();
