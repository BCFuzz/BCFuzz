function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 125; v2++) {
        ("p").replace(v2, v2);
    }
}
new F0();
gc();
