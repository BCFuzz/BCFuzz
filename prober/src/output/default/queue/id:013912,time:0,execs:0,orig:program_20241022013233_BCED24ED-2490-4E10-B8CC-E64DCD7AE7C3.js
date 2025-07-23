function f0(a1) {
    const o7 = {
        o(a3) {
            function f4(a5) {
                return a3;
            }
            this.get = f4;
            try { this.o(); } catch (e) {}
            return this;
        },
    };
    return o7;
}
f0(f0).o();
f0().o();
gc();
