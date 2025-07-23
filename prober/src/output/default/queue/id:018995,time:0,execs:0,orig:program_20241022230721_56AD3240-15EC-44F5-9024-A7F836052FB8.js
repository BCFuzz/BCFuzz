function f1(a2, a3) {
    const o4 = {
        "d": a2,
        "g": "-1416266442",
        "f": a3,
        "a": a3,
        [-1]: a3,
        "h": "-1416266442",
        "e": a2,
        "c": a3,
    };
    o4.get = f1;
    return o4;
}
Reflect.defineProperty(Reflect, Reflect, f1());
gc();
