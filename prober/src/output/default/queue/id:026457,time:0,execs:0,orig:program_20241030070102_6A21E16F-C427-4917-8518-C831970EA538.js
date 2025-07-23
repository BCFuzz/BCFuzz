const v2 = URIError(URIError).__proto__;
const v4 = new Proxy(v2, v2);
v4.message = v4;
const v5 = v4.message;
v5[5] = v5;
for (let i8 = -3, i9 = 10; i8 < i9; i9--) {
}
gc();
