const v0 = [1566798622,15,27125,-48740,9,-921770264,8];
const v2 = new BigInt64Array();
const v3 = [1.7976931348623157e+308,1e-15,3.5204602049067457,2.980655024970983e+306,-1.4601091970828127e+308];
function f4(a5) {
    const v6 = [v3];
    const v7 = v3.__proto__;
    const o11 = {
        o(a9, a10) {
            return v7;
        },
        "deleteProperty": f4,
        "get": f4,
        "getOwnPropertyDescriptor": f4,
        "has": f4,
        "isExtensible": v2,
        "ownKeys": f4,
        "preventExtensions": v0,
        "set": f4,
    };
    try { v7.at(v6); } catch (e) {}
}
v3[Symbol.toPrimitive] = f4;
class C15 {
    static [v3];
}
gc();
