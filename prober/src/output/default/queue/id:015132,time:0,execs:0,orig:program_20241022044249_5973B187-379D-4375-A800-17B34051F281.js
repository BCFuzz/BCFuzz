function f1() {
    const o2 = {
    };
    return o2.hasOwnProperty();
}
const v5 = new Float32Array(3650);
v5.sort(f1);
gc();
