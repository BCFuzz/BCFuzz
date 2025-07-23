const v1 = new Float64Array(Float64Array);
function f2(a3) {
    return a3;
}
v1.get = f2;
const v5 = [17428,39892,10000,65536,7,-268435456,-62031];
v5.fill(v1);
const o7 = {
};
const v9 = new Proxy(v5, o7);
const v10 = new Uint16Array(v5, v9, Uint16Array);
const v12 = this.constructor;
try { v12.defineProperties(v10, v9); } catch (e) {}
gc();
