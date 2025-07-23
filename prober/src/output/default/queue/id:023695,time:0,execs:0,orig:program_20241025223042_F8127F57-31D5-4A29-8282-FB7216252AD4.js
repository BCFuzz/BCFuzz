function f0() {
    return f0;
}
const o10 = {
    toString(a3, a4) {
        let v5;
        try { v5 = a3.toString(2.220446049250313e-16, a3); } catch (e) {}
        for (let v6 = 0; v6 < 250; v6++) {
            const o7 = {
            };
            const t10 = o7.constructor.create(a4);
            t10.toString = f0;
            for (let i = 0; i < 5; i++) {
            }
        }
        return v5;
    },
};
o10.toString(o10, o10);
gc();
