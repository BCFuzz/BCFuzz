const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f9(a10, a11, a12, a13) {
        a11 + a11;
        a11 + a11;
        return f9;
    }
    for (let v16 = 0; v16 < 5; v16++) {
        const t8 = f9(v16, a4, f9, v16);
        t8(v16, "9007199254740992");
    }
    return a4;
}
v2.map(f3);
gc();
