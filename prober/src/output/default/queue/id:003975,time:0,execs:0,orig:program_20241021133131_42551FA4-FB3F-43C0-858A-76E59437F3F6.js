function F0() {
    if (!new.target) { throw 'must be called with new'; }
    ("parse").__proto__;
    for (let v4 = 0; v4 < 50; v4++) {
        v4++;
        ("257")[1].fontsize();
        v4--;
    }
}
new F0();
new F0();
new F0();
gc();
