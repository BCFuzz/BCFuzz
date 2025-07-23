function f0() {
    class C2 {
    }
    for (let v3 = 0; v3 < 85; v3++) {
        Reflect.setPrototypeOf(Reflect, C2);
        const v6 = [f0,f0];
        Reflect.apply(("268435440").padEnd, C2, v6);
    }
    return "268435440";
}
f0();
f0();
gc();
