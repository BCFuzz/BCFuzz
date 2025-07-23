function F0() {
    if (!new.target) { throw 'must be called with new'; }
    ("parse").__proto__.fontsize();
    for (let v5 = 0; v5 < 50; v5++) {
        v5++;
        ("257")[1].fontsize();
        v5--;
    }
}
const v11 = new F0();
const t10 = v11.constructor;
new t10();
gc();
