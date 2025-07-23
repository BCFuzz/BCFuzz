const v1 = [1886911792,1886911792];
const o2 = {
};
const v4 = new Proxy(v1, o2);
const o5 = {
};
const v7 = o5.constructor.freeze(v4);
try { v7.push(1886911792); } catch (e) {}
gc();
