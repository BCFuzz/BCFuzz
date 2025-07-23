function f0() {
    const o2 = {
        65535: "a",
    };
    return f0;
}
for (let i = 0; i < 10; i++) {
    f0();
}
gc();
