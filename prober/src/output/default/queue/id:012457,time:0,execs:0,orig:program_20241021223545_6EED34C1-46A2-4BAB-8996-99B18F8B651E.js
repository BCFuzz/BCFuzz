async function f2(a3, a4, a5, a6) {
    const v9 = new Uint8Array();
    function F10(a12, a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = v9;
    }
    const v16 = new F10();
    for (const v18 of v16.d) {
    }
    return "";
}
f2(f2, f2, "", "");
gc();
