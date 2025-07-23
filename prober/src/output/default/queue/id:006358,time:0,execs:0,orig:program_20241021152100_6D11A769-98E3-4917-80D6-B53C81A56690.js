function f0() {
    const o1 = {
    };
    o1.h = o1;
    o1.h = o1;
    return o1;
}
const v4 = new Uint16Array(512);
v4.filter(f0);
gc();
