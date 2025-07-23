const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            (() => {
                for (let i10 = 10, i11 = 10; -13369 < i11; i11--) {
                }
                return i6 < i7;
            })();
            i7--) {
            for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
                for (let [i39, i40] = (() => {
                        Object.defineProperty(Int16Array.__proto__, "e", { configurable: true, enumerable: true, set: ArrayBuffer });
                        return [0, 10];
                    })();
                    i39 < i40;
                    i40--) {
                }
            }
        }
        return a2;
    }
    f1();
`;
for (let i50 = 0, i51 = 10; i50 < i51; i51--) {
}
const v60 = eval(v0).next(v0, v0, v0, eval);
function F61(a63, a64) {
    if (!new.target) { throw 'must be called with new'; }
    const v66 = new Float32Array();
    v66.slice();
}
new F61(v60, F61);
gc();
