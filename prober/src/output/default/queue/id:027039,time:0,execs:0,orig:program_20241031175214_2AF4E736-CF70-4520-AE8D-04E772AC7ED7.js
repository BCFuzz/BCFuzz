function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        return F0;
    }
    const v3 = f2.bind();
    for (let i6 = 0, i7 = 10; i6 < i7; 13760 instanceof v3, i7--) {
    }
    for (let i17 = 0; i17 < 21768; i17++) {
    }
}
new F0();
gc();
