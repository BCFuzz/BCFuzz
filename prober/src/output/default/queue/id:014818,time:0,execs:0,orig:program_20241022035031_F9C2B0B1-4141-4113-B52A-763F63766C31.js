const v0 = [364057761,4294967295,5];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v5 = 0; v5 < 10; v5++) {
        try { v0.find(a4); } catch (e) {}
        for (let v7 = 0; v7 < 250; v7++) {
        }
        function* f8(a9, a10, a11) {
            return v5;
        }
        f8();
    }
}
new F1();
gc();
