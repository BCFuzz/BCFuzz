function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new Float32Array();
    let v6 = 3;
    const v7 = `
        ({"byteLength":v6,} = v5);
        /\u{12345}/myvis;
    `;
    const v9 = v7.split(v6);
    const v10 = [2.0,-4.0];
    function f11(a12, a13, a14) {
    }
    const v15 = f11();
    function F16(a18, a19, a20, a21) {
        if (!new.target) { throw 'must be called with new'; }
        try { a21.constructor(v9); } catch (e) {}
    }
    new F16(v10, f11, v15, F16);
}
new F0();
gc();
