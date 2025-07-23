function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
const v5 = new Uint32Array(1000);
for (const v6 in v5) {
    function f7(a8, a9, a10, a11) {
        const o17 = {
            set b(a14) {
                this.b;
                for (let v16 = 0; v16 < 5; v16++) {
                }
            },
        };
        o17.b = o17;
        return arguments;
    }
    f7();
}
gc();
