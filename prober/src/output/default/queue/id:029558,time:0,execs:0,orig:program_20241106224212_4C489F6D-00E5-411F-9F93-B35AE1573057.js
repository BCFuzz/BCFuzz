const v2 = Proxy.revocable(isFinite, isFinite);
v2.revoke();
const v4 = v2.proxy;
const v6 = this.constructor;
try { v6.getOwnPropertyDescriptor(v4); } catch (e) {}
for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
}
gc();
