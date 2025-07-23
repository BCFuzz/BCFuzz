function f0() {
    const o4 = {
        ..."freeze",
        7: -1000000.0,
        [-75.11617101265176]: -1000000.0,
    };
    return "freeze";
}
for (let v5 = 0; v5 < 10; v5++) {
    f0();
}
gc();
