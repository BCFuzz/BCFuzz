function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.p16 = a4;
    for (let v5 = 0; v5 < 25; v5++) {
        const v7 = "p" + v5;
        this[v7];
        for (let v9 = 0; v9 < 25; v9++) {
        }
        this[v7] = v5;
    }
}
new F1();
new F1();
gc();
