function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
const v7 = [1e-15,NaN,5.0,-2.2250738585072014e-308,1.7976931348623157e+308,-1000000.0,-402969.50717458955,-1000000.0,1.6198799835964611e+308];
Object.defineProperty(v7, "toJSON", { writable: true, configurable: true, value: v6 });
for (let [i29, i30] = (() => {
        const v11 = new Int8Array(4096);
        const v14 = Date(4096);
        const o15 = {
            [Math]: v14,
            [v11]: v7,
        };
        JSON.stringify(o15);
        for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
        }
        return [0, 10];
    })();
    i30--, i29 < i30;
    ) {
}
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
}
gc();
