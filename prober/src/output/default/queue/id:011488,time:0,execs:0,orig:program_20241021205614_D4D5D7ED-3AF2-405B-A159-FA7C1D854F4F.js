const v0 = [];
function f1() {
}
const o2 = {
    "set": f1,
};
const v4 = new Proxy(v0, o2);
try { v4.shift(); } catch (e) {}
gc();
