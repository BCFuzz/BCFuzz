function f2(a3, a4) {
    return a4;
}
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new F5(Uint16Array, "NEGATIVE_INFINITY", Uint16Array, f2);
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i18 = 0, i19 = 10;
        (() => {
            const v20 = i18 < i19;
            for (const v21 in "NEGATIVE_INFINITY") {
                Object.defineProperty(arguments, v21, { get: f2 });
            }
            a15();
            return v20;
        })();
        ) {
    }
}
try { new F12("NEGATIVE_INFINITY", v11, Uint16Array); } catch (e) {}
gc();
