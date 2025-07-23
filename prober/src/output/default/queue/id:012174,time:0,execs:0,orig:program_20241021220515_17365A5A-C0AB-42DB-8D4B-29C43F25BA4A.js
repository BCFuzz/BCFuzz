function f2() {
    return f2;
}
const v3 = [-4294967297];
v3.roundingMode = f2;
const v4 = [f2,f2,f2,v3];
let v5;
try { v5 = v4.toLocaleString(-2.5791223860514156, v3); } catch (e) {}
function f6(a7, a8) {
    for (let [i14, i15] = (() => {
            eval(v5);
            return [0, 10];
        })();
        i14 < i15;
        i15--) {
    }
    return arguments;
}
f6();
gc();
