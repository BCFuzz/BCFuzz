function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = [4294967296,-1507112381];
const o3 = {
};
Proxy.toString = f0;
const v5 = new Proxy(v2, o3);
v5.fill(Proxy);
try { v5.copyWithin(v5); } catch (e) {}
gc();
