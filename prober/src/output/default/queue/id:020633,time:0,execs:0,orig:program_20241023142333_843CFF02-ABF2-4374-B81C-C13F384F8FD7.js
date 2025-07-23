for (let i3 = 0, i4 = 1024; i3 < i4; i4--) {
}
const o11 = {
};
const v13 = new Proxy(Uint16Array, o11);
const o14 = {
};
function f15(a16) {
    return a16;
}
o14.get = f15;
const v17 = new Proxy(v13, o14);
try { new v17(); } catch (e) {}
gc();
