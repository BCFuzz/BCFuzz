function f0() {
    const v1 = [f0,f0,f0];
    const o2 = {
    };
    const v4 = new Proxy(v1, o2);
    function f5() {
        "undefined" in v4;
        return "undefined";
    }
    for (let v8 = 0; v8 < 5; v8++) {
        f5();
    }
    return o2;
}
f0();
f0();
for (let i14 = -3, i15 = 10; i15--, i14 < i15;) {
}
gc();
