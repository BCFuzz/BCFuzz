const v0 = /(?:a*)+[PsTq]/mvgs;
const v1 = [v0,v0];
const o2 = {
};
const v4 = new Proxy(v1, o2);
const o5 = {
};
o5.constructor.freeze(v4);
v4[8] = v0;
gc();
