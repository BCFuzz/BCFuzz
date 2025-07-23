for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int32Array(681);
function f13(a14) {
    return a14;
}
function f15(a16, a17, a18, a19) {
    Object.defineProperty(arguments, "valueOf", { writable: true, configurable: true, value: f13 });
    const v21 = arguments.length;
    const o22 = {
        "h": v21,
    };
    return f15;
}
v12.map(f15);
gc();
