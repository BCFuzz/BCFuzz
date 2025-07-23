function f0(a1) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        this.propertyIsEnumerable();
    }
    const v5 = new F2();
    for (const v6 in v5) {
    }
    return v5;
}
([3.6678067847652756,-3.3588036264140016e+307,5.730101676166519e+306,-1000000000.0,0.21287490118238417,-1.5994042304030588e+308,2.2250738585072014e-308,0.0]).flatMap(f0);
gc();
