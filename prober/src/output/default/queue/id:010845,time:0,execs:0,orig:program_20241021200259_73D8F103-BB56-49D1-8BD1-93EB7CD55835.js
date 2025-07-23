const v0 = [-2.0,1.428005687562721e+308,-Infinity,1000000.0,0.44266142097107364,6.153521557315855,1000.0,5.0];
const v1 = [-10];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v6 = 0; v6 < 10; v6++) {
        for (let v7 = 0; v7 < 250; v7++) {
        }
        let v8 = 2147483648;
        const v9 = --v8;
        function f10() {
            return F2;
        }
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v17 = new F11(a5, v6, F2, v0);
        new F11(v1, a5, v17);
        new F11(v0, v9);
        f10.apply(a4, a5);
    }
}
new F2(F2, v0);
gc();
