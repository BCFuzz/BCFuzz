const v1 = [1886911792];
const o2 = {
};
function f3(a4, a5) {
    return a5;
}
o2.set = f3;
const v7 = new Proxy(v1, o2);
try { v7.shift(f3, 1886911792, v7, v7, v1); } catch (e) {}
const o9 = {
};
const v11 = o9.constructor.freeze(v7);
try { v11.pop(); } catch (e) {}
gc();
