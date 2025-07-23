const v2 = SyntaxError(SyntaxError).__proto__;
v2.h = v2;
for (const v3 in v2) {
}
gc();
