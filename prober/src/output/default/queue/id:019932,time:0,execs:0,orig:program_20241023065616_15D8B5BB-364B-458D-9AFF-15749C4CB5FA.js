function f1(a2, a3) {
    return "NEGATIVE_INFINITY";
}
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new F4(f1, "NEGATIVE_INFINITY", "NEGATIVE_INFINITY", f1);
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i17 = 0, i18 = 10;
        (() => {
            const v19 = i17 < i18;
            for (const v20 in "NEGATIVE_INFINITY") {
                Object.defineProperty(arguments, v20, { get: f1 });
            }
            a14(v10, a13);
            return v19;
        })();
        ) {
    }
}
try { new F11("NEGATIVE_INFINITY", v10); } catch (e) {}
gc();
