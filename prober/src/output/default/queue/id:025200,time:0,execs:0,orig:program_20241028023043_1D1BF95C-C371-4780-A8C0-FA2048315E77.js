for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    const v16 = ("m")["indexOf"]();
    const v17 = `
        /\u{12345}/myvis;
        [1e-15,-1000000.0,-897.0942325866591];
    `;
    const v20 = v17.split(v16);
    const v21 = [2.0,-4.0];
    function f22(a23, a24, a25) {
        return a23;
    }
    const v26 = f22(F11, v20, v20);
    function F27(a29, a30, a31, a32) {
        if (!new.target) { throw 'must be called with new'; }
        try { a32.constructor(v20); } catch (e) {}
    }
    new F27(v21, f22, v26, F27);
}
new F11();
gc();
