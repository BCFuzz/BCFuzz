const v0 = [7,268435441,13121,-7319,-1445708090,1000,1024];
function f2(a3) {
    const v6 = this.constructor.freeze(v0);
    const v8 = ("").split(v6);
    const v9 = [2.0,-4.0];
    function f10(a11, a12, a13) {
        return a13;
    }
    const v14 = f10(v6, f2, Int16Array);
    function F15(a17, a18, a19, a20) {
        if (!new.target) { throw 'must be called with new'; }
        a20.constructor(v8);
    }
    const v22 = new F15(v9, f10, v14, F15);
    return v22;
}
const v24 = new Int16Array(1055);
v24.sort(f2);
gc();
