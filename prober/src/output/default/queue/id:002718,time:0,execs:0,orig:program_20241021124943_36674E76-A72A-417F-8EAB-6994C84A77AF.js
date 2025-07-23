function f0() {
    return f0;
}
function f1() {
    const o4 = {
        1538327311: f0,
        [-627566.2772552643]: "replace",
    };
    return o4;
}
for (let v5 = 0; v5 < 10; v5++) {
    f1();
}
gc();
