const v0 = [62250,-1417039522,268435456,-13,-260,1201136488,15,-54487,-820541516,536870888];
const v2 = (-9223372036854775807).__proto__;
const o3 = {
};
o3.deleteProperty = v0;
const v5 = new Proxy(v2, o3);
class C7 {
}
const v8 = new C7();
function f9(a10) {
    delete v5[7];
    return v8;
}
v8.constructor = f9;
const v12 = v8.constructor;
try { v12.apply(v12, f9, v12); } catch (e) {}
try { v12(); } catch (e) {}
gc();
