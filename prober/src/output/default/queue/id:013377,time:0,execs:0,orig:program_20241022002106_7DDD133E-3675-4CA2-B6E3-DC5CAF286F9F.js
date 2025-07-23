function f0() {
    function f1(a2) {
        const o6 = {
            n(a4, a5) {
                return a2;
            },
        };
    }
    f1();
    f1();
}
const v11 = new Uint32Array(4046);
v11.reduce(f0);
gc();
