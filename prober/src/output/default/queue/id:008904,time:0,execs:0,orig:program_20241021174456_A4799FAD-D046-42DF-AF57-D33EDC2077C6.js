function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function f3() {
        return F1;
    }
    const v4 = [1.5683563639297804e+308,-285373.29658518825,-2.0,291.3566314513166,NaN,1000000.0,3.0];
    f3();
    const v6 = v4.length;
    try { new F1(512, v6, F1, ...v6); } catch (e) {}
    for (let v8 = 0; v8 < 2500; v8++) {
    }
}
new F1();
gc();
