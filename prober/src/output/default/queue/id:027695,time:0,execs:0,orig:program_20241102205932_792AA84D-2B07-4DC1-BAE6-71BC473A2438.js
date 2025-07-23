function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 250; v4++) {
        this.b = this;
        delete this.b;
    }
}
new F0();
gc();
