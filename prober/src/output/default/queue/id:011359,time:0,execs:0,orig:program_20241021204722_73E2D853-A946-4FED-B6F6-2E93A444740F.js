const v0 = /a{,}/yi;
const v1 = [-5071270,2,-1773741108];
const o2 = {
};
o2.defineProperty = v0;
const v4 = new Proxy(v1, o2);
try { v4.shift(); } catch (e) {}
gc();
