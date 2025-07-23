function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
const v3 = f0();
for (let v4 = 0; v4 < 10; v4++) {
    with (v3) {
        const o5 = {
        };
        new Proxy(v2, o5);
    }
}
gc();
