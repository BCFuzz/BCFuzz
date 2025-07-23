function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = Array();
    function f6(a7) {
        const o8 = {
            [v5]: v5,
            "g": a7,
        };
        return o8;
    }
    const v9 = f6(F0);
    const v12 = [f6(v9).g];
    function f13() {
        return v9;
    }
    JSON.parse(JSON.stringify(v12), f13);
}
new F0(F0, F0);
gc();
