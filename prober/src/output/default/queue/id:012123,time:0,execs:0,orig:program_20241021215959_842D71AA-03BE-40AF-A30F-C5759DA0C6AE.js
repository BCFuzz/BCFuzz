const v1 = ([-2.0,2.220446049250313e-16,2.5401997447871806e+307,-4.0]).concat();
for (let v2 = 0; v2 < 10; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        v1.push(v2);
    }
    new F3();
}
gc();
