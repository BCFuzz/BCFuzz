function F1() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 25; v3++) {
        for (let v4 = 0; v4 < 5; v4++) {
        }
        Math.__proto__ = null;
    }
}
new F1();
gc();
