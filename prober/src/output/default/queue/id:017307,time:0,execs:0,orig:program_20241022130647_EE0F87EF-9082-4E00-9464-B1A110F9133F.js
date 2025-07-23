const v0 = [62250,-1417039522,268435456,-13,-260,1201136488,15,-54487,-820541516,536870888];
const v2 = (-9223372036854775807).__proto__;
const o3 = {
};
o3.deleteProperty = v0;
const v5 = new Proxy(v2, o3);
function f6(a7) {
    delete v5[a7];
    return a7;
}
try { f6(); } catch (e) {}
gc();
