for (let v1 = 0; v1 < 5; v1++) {
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        a6.caller;
    }
    const v9 = new F3(196.25100004624983, F3);
    const t6 = v9.constructor;
    new t6(10000, v1);
}
gc();
