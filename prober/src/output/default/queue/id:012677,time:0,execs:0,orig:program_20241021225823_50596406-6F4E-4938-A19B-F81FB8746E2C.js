function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new Uint32Array(this, F0, Uint32Array);
    function f4(a5, a6) {
        const o12 = {
            o(a8, a9, a10) {
                try { this.o(f4); } catch (e) {}
                v3.__proto__ = this;
                return this;
            },
        };
        return o12.o(a6, o12);
    }
    const v14 = f4();
    f4(v14, v14);
}
new F0();
new F0();
new F0();
gc();
