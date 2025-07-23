function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.p16 = a7;
    for (let v8 = 0; v8 < 25; v8++) {
        const v10 = "p" + v8;
        try { v10.search(); } catch (e) {}
        this[v10];
        for (let v13 = 0; v13 < 25; v13++) {
        }
        this[v10] = v8;
    }
}
new F4();
gc();
