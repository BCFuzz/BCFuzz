function F0() {
    if (!new.target) { throw 'must be called with new'; }
    ("parse").__proto__.sub(F0);
    for (let v5 = 0; v5 < 50; v5++) {
        v5++;
        ("257")[1].fontsize(v5).blink();
        v5--;
    }
}
const v12 = new F0();
const t10 = v12.constructor;
new t10();
new F0();
new F0();
new F0();
gc();
