function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = ([[a2]]).toString();
    function f8() {
        const t4 = Date().constructor;
        const v12 = t4().toLocaleLowerCase();
        const v14 = new Int32Array(257);
        for (let v15 = 0; v15 < 5; v15++) {
            v14[v12 + v6] = v15;
        }
        return 257;
    }
    const v18 = new Int32Array(257);
    v18.map(f8);
}
new F0(F0);
new F0();
gc();
