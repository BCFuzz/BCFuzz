function f0() {
    const o3 = {
        __proto__: "HHA",
        [-128]: "HHA",
    };
    return o3;
}
for (let v4 = 0; v4 < 10; v4++) {
    f0();
}
gc();
