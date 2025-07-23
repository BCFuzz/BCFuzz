function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        const o5 = {
            1424866300: f4,
        };
        return o5;
    }
    const v6 = f4();
    const v7 = v6[1424866300];
    const v9 = v7.name.lastIndexOf;
    try { v9(F0, v7, v6); } catch (e) {}
}
new F0(F0, F0);
gc();
