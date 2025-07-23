function f0() {
    const v1 = /[FrC]/yvis;
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = v1;
        delete this.f;
        this.f = a5;
    }
    new F2();
    return v1;
}
const v10 = new Uint16Array(512);
v10.filter(f0);
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
gc();
