for (let v4 = 0; v4 < 5; v4++) {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    try { F5.call(); } catch (e) {}
    const v8 = new F5();
    v8.valueOf();
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v14 = new F10(v8, 4);
    v14.toString(4, v14, v14, v14);
    const v16 = v14.__defineGetter__;
    try { v16.apply(); } catch (e) {}
    v14.hasOwnProperty(F10, "", Array, "");
}
gc();
