const v0 = [65535,1980682310,1073741823,65536,65536];
const v1 = [56715];
Object.defineProperty(v1, 1, { value: v0 });
v1.push(v1);
const o3 = {
    ...v1,
    __proto__: v1,
};
o3.reverse();
gc();
