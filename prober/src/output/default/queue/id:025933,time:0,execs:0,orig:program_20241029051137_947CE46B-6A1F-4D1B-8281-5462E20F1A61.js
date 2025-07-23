function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Float32Array();
    let v7 = 3;
    const v8 = `
        268435456 ** v7;
        const t5 = a4.b;
        t5.b = 268435456;
        ({"byteLength":v7,} = v6);
        delete v6[Float32Array];
        /\u{12345}/myvis;
    `;
    const v13 = v8.split(v7);
    v13[3] ^= 268435456;
    const v14 = [2.0,-4.0];
    function f15(a16, a17, a18) {
        return v8;
    }
    const v19 = f15(F1, v7, F1);
    function F20(a22, a23, a24, a25) {
        if (!new.target) { throw 'must be called with new'; }
        try { a25.constructor(v13); } catch (e) {}
    }
    new F20(v14, f15, v19, F20);
}
new F1(268435456, F1);
gc();
