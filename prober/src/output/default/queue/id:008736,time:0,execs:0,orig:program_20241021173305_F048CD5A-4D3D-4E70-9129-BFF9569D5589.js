function f0() {
    const o2 = {
    };
    return o2.hasOwnProperty(9007199254740990);
}
const v6 = new Int32Array(3650);
v6.sort(f0);
gc();
