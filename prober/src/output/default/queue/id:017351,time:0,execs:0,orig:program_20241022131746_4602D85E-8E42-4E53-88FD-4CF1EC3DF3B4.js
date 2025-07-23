for (let v0 = 0; v0 < 100; v0++) {
    function f1() {
    }
    const v2 = new f1();
    const v3 = [536870887,1073741823,322185979,1,4,536870888,13,-9];
    const v5 = [Reflect,Reflect];
    Reflect.apply(v3.flat, v2, v5);
}
gc();
