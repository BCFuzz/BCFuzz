const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        const v14 = 9 + 9;
        const v15 = v14 * v14;
        const o19 = {
            toString(a17) {
                a17.toString(152);
                return a5;
            },
        };
        try { o19.toString(v15); } catch (e) {}
    }
    new F8(v2, a6);
    return f3;
}
v2.map(f3);
gc();
