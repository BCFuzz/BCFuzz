function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        return F0;
    }
    const v3 = [1.5683563639297804e+308,-285373.29658518825,-2.0,291.3566314513166,NaN,1000000.0,3.0];
    const v4 = f2();
    const v6 = v4 <= v3 ? v4 : v3;
    for (let v7 = 0; v7 < 250; v7++) {
    }
    v6 << -1000.0;
}
new F0();
gc();
