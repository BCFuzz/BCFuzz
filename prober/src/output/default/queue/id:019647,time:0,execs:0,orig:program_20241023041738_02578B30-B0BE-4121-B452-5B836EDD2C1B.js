function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 5; v4++) {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v7 = new F5();
        v7.constructor;
        const v9 = new F5();
        this.__proto__ = v9;
    }
}
const v10 = new F0(F0, F0);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    for (const v18 in v10) {
    }
    for (let i21 = 8, i22 = 10; i22--, 2 < i22;) {
    }
}
new F12(2, F12, 2, v10);
for (let [i42, i43] = (() => {
        for (let i33 = 0, i34 = 10; i33 < i34; i34--) {
        }
        return [0, 10];
    })();
    i42 < i43;
    i43--) {
}
gc();
