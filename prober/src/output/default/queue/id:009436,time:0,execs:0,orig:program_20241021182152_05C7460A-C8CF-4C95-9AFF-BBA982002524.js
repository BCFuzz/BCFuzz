for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const v12 = new Int32Array(681);
function f13(a14, a15, a16, a17) {
    delete arguments.callee;
    for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
    }
    return arguments;
}
v12.map(f13);
gc();
