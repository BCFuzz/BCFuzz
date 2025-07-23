const v2 = URIError().__proto__;
const v4 = new Proxy(v2, v2);
v4.message = v4;
for (let v5 = 0; v5 < 5; v5++) {
    v2 < v5;
}
gc();
