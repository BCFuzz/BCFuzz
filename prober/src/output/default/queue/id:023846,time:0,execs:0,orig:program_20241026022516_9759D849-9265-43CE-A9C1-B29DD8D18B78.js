const v1 = [4096];
v1[1] = v1;
JSON["stringify"](v1.toLocaleString());
gc();
