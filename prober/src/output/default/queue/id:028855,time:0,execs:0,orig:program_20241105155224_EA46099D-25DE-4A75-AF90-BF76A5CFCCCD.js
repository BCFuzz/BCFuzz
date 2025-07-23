function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return a2;
    }
    for (let i7 = 16, i8 = 1851;
        (() => {
            const v9 = i8--;
            const v12 = ("-789426228").constructor.fromCharCode(v9);
            const v13 = i7 < i8;
            this["4294967296" + v12] = v12;
            return v13;
        })();
        ) {
    }
    const o21 = {
    };
    for (let i24 = 0, i25 = 10; i24 !== i25; i25--) {
    }
    o21.toJSON = f4;
    JSON.stringify(o21);
}
const v34 = new F0(F0, F0);
const v35 = v34.constructor;
const v36 = new v35(v34, v35);
const t25 = v36.constructor;
new t25(v36);
gc();
