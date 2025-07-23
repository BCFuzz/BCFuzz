const v0 = [2.2250738585072014e-308,-351.39173286927814,-1.42002853459657e+308,-1e-15,5.0,-598089.2245110758,0.2882015350965105,1.7976931348623157e+308,1000000000.0];
function f2() {
    for (let i5 = 0, i6 = 10; i5 !== i6; i6--) {
    }
    this.b = this;
    delete this.b;
    return this;
}
const v16 = new Float64Array(2422);
v16.map(f2, v0);
const v18 = `
    async function* f19(a20, a21) {
        for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
            for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
                v0.with();
            }
        }
        return a20;
    }
    f19(Float64Array, f19);
`;
eval(v18).next();
gc();
