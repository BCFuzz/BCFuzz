function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3, a4) {
        a3(this);
        return f2;
    }
    new Promise(f2);
}
new F0();
const v9 = [1.6860289375747012e+308];
v9.shift();
Int16Array.from(v9);
new F0();
this.DataView;
gc();
