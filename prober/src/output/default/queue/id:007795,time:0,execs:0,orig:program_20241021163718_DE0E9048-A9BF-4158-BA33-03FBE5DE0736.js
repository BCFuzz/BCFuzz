const v2 = URIError().__proto__;
const v3 = [v2];
let v4;
try { v4 = v3.every(URIError); } catch (e) {}
const o5 = {
    ...v4,
    ...v2,
};
gc();
