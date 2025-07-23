function f0(a1) {
    const v4 = a1 % (1073741823 - 1073741823);
    Reflect.construct(Date, [1073741823]);
    class C9 extends Date {
    }
    const v10 = new C9();
    const v13 = Number.isNaN(v10.getYear());
    let v14;
    try { v14 = v4(v13, f0); } catch (e) {}
    for (let v15 = 0; v15 < 250; v15++) {
    }
    return v14;
}
([3.6678067847652756,-3.3588036264140016e+307,5.730101676166519e+306,-1000000000.0,0.21287490118238417,-1.5994042304030588e+308,2.2250738585072014e-308,0.0]).flatMap(f0);
gc();
