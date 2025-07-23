function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = ("DVVte").big(this, "DVVte", F0);
    const v7 = new Uint32Array(1003);
    for (const v8 in v7) {
        for (let v9 = 0; v9 < 5; v9++) {
            v7.b = v8;
            const t7 = "DVVte";
            t7[v8] &&= v9;
            v4[v8] = v9;
        }
    }
}
new F0();
gc();
