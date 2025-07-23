function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.p16 = a3;
    for (let v4 = 0; v4 < 25; v4++) {
        const v6 = "p" + v4;
        this[v6];
        this[v6] = v4;
    }
}
new F0();
gc();
