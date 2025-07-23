function f0() {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        a5.caller;
    }
    new F2(196.25100004624983, F2);
    return F2;
}
f0();
gc();
