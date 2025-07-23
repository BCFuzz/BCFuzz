function f0() {
    const o3 = {
        ..."2147483649",
        [-5.0]: -5.0,
        2147483647: f0,
        "d": -5.0,
    };
    for (let v4 = 0; v4 < 5; v4++) {
        delete o3[2];
    }
    return o3;
}
for (let v6 = 0; v6 < 10; v6++) {
    f0();
}
gc();
