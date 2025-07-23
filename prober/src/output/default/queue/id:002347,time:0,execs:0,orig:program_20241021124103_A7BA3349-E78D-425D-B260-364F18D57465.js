function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = this;
    this.e = Map;
    function f4() {
        return a3;
    }
    class C5 extends f4 {
        #m(a7) {
        }
    }
    const v8 = new C5();
    const v9 = new C5();
    v9.f = v8;
    this.c = a3;
    function f10() {
        return 0.12341254814780989;
    }
    f10();
    f10();
    f10();
    [F1,F1,F1];
    const v21 = [v9,v9,v9];
    function F22(a24, a25) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = v21;
    }
    new F22();
    new F22();
    new F22(a3, this);
    const t30 = ([960.626210892927,0.6725238080907336,-1.111746397251804e+307,1e-15,282679.5475648043,-1.1648578776746704e+308,-1.0,733.4826723557508,-334583.6834646679]).constructor;
    const v34 = t30();
    function f35(a36, a37) {
        return v34;
    }
    const o50 = {
        next() {
            return f4;
        },
    };
    function f51(a52, a53) {
        return f10;
    }
    function F55() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v63 = new Uint8Array(210);
    for (const v64 of v63) {
    }
    function f65(a66, a67) {
        return a3;
    }
}
new F1();
new F1();
gc();
