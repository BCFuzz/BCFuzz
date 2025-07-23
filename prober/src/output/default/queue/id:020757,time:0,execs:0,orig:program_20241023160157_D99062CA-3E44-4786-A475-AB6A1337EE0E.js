function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 25; v2++) {
        const v3 = v2++;
        const v5 = ("257")[1];
        const v6 = v5.fontsize(v2, v3);
        v6.blink(v5).replace(v6);
        v2--;
    }
}
const v10 = new F0();
const t11 = v10.constructor;
new t11();
const t13 = v10.constructor;
new t13();
gc();
