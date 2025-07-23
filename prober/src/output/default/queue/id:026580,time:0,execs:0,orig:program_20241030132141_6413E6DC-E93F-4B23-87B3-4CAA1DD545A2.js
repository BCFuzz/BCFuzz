const o12 = {
    toString(a3, a4) {
        const o5 = {
        };
        const t4 = o5.constructor;
        const v7 = t4(3.1578303551060433e+307);
        function f8(a9, a10) {
            return 64;
        }
        v7.valueOf = f8;
        return v7.toExponential(v7);
    },
};
class C13 {
    static [o12];
}
gc();
