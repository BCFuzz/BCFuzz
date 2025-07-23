function f0() {
    const v1 = [f0,f0,f0];
    const o2 = {
    };
    const v4 = new Proxy(v1, o2);
    v4.fill(f0, f0, f0);
    function f6() {
        "undefined" in v4;
        return "undefined";
    }
    for (let v9 = 0; v9 < 5; v9++) {
        v9 << v9;
        f6();
    }
    return o2;
}
f0();
for (let i15 = -3, i16 = 10; i16 + i16, i16--, i15 < i16;) {
}
gc();
