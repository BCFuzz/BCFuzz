function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = `
        ([...[268435439,16,15,-49187,512,-1]]).flatMap();
    `;
    const v7 = v3.replaceAll(8);
    for (let [i20, i21] = (() => {
            for (let i11 = -3, i12 = 10; i11 < i12; i12--) {
            }
            return [0, 10];
        })();
        i20 < i21;
        i21--) {
    }
    const v28 = [2.0,-4.0];
    function f29(a30, a31, a32) {
        return a30;
    }
    const v33 = f29();
    function F34(a36, a37, a38, a39) {
        if (!new.target) { throw 'must be called with new'; }
        a39.constructor(v7);
    }
    for (let i43 = -3, i44 = 10;
        (() => {
            i44--;
            const v46 = i43 < i44;
            for (let i49 = 0, i50 = 10; i49 < i50; i50--) {
            }
            return v46;
        })();
        ) {
    }
    new F34(v28, f29, v33, F34);
}
try { new F0(); } catch (e) {}
gc();
