const v1 = new Uint32Array(Uint32Array);
function f2(a3, a4) {
    const o10 = {
        o(a6, a7, a8) {
            try { this.o(); } catch (e) {}
            v1.__proto__ = this;
            return a4;
        },
    };
    return o10.o();
}
f2(f2, v1);
f2();
gc();
