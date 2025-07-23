function f0() {
    return f0;
}
const v1 = new f0();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
for (let v5 = 0; v5 < 50; v5++) {
    function f6(a7, a8, a9) {
        a7.b = a7;
        a7 >= a9;
        return v4;
    }
    f6(v1);
    f6(v4);
}
gc();
