const v2 = [1886911792];
const o3 = {
};
function f4(a5, a6) {
    return 536870888;
}
o3.set = f4;
const v8 = new Proxy(v2, o3);
const o9 = {
};
const v11 = o9.constructor.freeze(v8);
try { v11.push(1886911792); } catch (e) {}
gc();
