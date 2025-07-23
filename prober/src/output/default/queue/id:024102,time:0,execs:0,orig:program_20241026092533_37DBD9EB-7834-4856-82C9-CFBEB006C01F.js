function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const o2 = {
    };
    for (let v3 = 0; v3 < 92; v3++) {
        for (let v4 = 0; v4 < 22; v4++) {
        }
        Math.clz32(!o2);
        Math.__proto__ = o2;
    }
}
new F0();
gc();
