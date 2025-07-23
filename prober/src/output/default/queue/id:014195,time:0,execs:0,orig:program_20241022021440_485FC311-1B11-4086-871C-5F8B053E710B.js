const v0 = [-1163898871,45746,512,1000,-4294967295];
const v2 = Error();
v2.configurable = Error;
Object.defineProperty(v2, "get", { writable: true, enumerable: true, value: Error });
function f3() {
    return v2;
}
const o4 = {
    "getOwnPropertyDescriptor": f3,
};
const v6 = new Proxy(v0, o4);
v6[4] = v6;
gc();
