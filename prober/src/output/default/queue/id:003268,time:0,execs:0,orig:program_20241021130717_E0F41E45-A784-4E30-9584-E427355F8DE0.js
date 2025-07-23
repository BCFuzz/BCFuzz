function f0() {
    const o5 = {
        toString(a2) {
            return ("fj").localeCompare();
        },
    };
    return o5;
}
const v6 = f0();
function f7(a8, a9) {
    const o10 = {
        [v6]: f0,
    };
    return a9;
}
f7();
f7();
gc();
