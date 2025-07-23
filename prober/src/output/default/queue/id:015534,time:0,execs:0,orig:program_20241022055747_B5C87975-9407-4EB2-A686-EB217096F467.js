const v0 = [-1163898871,45746,512,1000,-4294967295];
const v2 = Error();
v2.configurable = Error;
function f3() {
    return v2;
}
const o4 = {
    "getOwnPropertyDescriptor": f3,
};
const v6 = new Proxy(v0, o4);
try { v6.pop(); } catch (e) {}
gc();
