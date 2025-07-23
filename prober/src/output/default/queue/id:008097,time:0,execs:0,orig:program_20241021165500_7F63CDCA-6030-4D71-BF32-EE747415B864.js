for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v3 = new F1();
    const v4 = v3.constructor;
    const v6 = new Int16Array(v0);
    const v7 = new Int16Array();
    Reflect.apply(v7.copyWithin, v6, v4).toReversed(Reflect, v3, v7);
}
gc();
