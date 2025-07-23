function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    gc();
    const v6 = [Date];
    v6.toString = Date;
    const v7 = v6.toString();
    function f9() {
        ("n").fontcolor();
        const t7 = Date().constructor;
        const v15 = t7().toLocaleLowerCase();
        const v17 = new Int32Array();
        for (let v18 = 0; v18 < 5; v18++) {
            v17[v15 + v7] = v18;
        }
        return this;
    }
    const v21 = new Int32Array(257);
    v21.map(f9);
}
const v23 = new F0(F0);
new F0(F0);
new F0(v23);
gc();
