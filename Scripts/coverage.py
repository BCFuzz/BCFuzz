import scipy.stats

# coverage results for five times
fuzzilli_hermes_line_cov =   [59.5, 60.1, 58.9, 58.5, 59.2]
fuzzilli_hermes_func_cov =   [60.8, 60.9, 59.9, 60.1, 60.7]
fuzzilli_hermes_branch_cov = [37.8, 38.3, 37.2, 37.1, 37.4]
bcfuzz_fuzzilli_hermes_line_cov =   [58.3, 58.5, 58.3, 58.4]
bcfuzz_fuzzilli_hermes_func_cov =   [59.5, 60.2, 59.9, 60.0]
bcfuzz_fuzzilli_hermes_branch_cov = [36.5, 36.8, 36.5, 36.4]


die_hermes_line_cov =   [57.2, 57.1, 57.1, 57.2, 57.2]
die_hermes_func_cov =   [56.0, 55.8, 55.8, 55.8, 55.8]
die_hermes_branch_cov = [40.5, 40.3, 40.3, 40.4, 40.5]
bcfuzz_die_hermes_line_cov =   [56.9, 57.1, 56.8, 57.0, 57.0]
bcfuzz_die_hermes_func_cov =   [55.7, 55.8, 55.7, 55.7, 55.7]
bcfuzz_die_hermes_branch_cov = [40.1, 40.2, 40.0, 40.0, 40.1]


fuzzilli_jsc_line_cov =   [52.6, 52.2, 52.4, 52.0, 52.4]
fuzzilli_jsc_func_cov =   [51.4, 51.1, 51.1, 51.0, 51.3]
fuzzilli_jsc_branch_cov = [37.0, 36.7, 36.8, 36.3, 36.9]
bcfuzz_fuzzilli_jsc_line_cov =   [51.7, 51.9, 51.8, 52.2, 51.8]
bcfuzz_fuzzilli_jsc_func_cov =   [50.7, 50.8, 50.8, 51.1, 50.7]
bcfuzz_fuzzilli_jsc_branch_cov = [35.9, 36.1, 36.0, 36.3, 36.0]


die_jsc_line_cov =   [53.5, 53.4, 53.5, 53.4, 53.5]
die_jsc_func_cov =   [53.6, 52.4, 52.5, 52.4, 52.6]
die_jsc_branch_cov = [36.3, 36.0, 36.2, 36.0, 36.2]
bcfuzz_die_jsc_line_cov =   [54.2, 54.1, 54.2, 54.1, 54.1]
bcfuzz_die_jsc_func_cov =   [53.0, 52.9, 53.1, 52.9, 53.0]
bcfuzz_die_jsc_branch_cov = [36.7, 36.5, 36.7, 36.6, 36.6]

list_name = ["fuzzilli_hermes_line_cov","fuzzilli_hermes_func_cov","fuzzilli_hermes_branch_cov","bcfuzz_fuzzilli_hermes_line_cov","bcfuzz_fuzzilli_hermes_func_cov","bcfuzz_fuzzilli_hermes_branch_cov","die_hermes_line_cov","die_hermes_func_cov","die_hermes_branch_cov","bcfuzz_die_hermes_line_cov","bcfuzz_die_hermes_func_cov","bcfuzz_die_hermes_branch_cov","fuzzilli_jsc_line_cov","fuzzilli_jsc_func_cov","fuzzilli_jsc_branch_cov","bcfuzz_fuzzilli_jsc_line_cov","bcfuzz_fuzzilli_jsc_func_cov","bcfuzz_fuzzilli_jsc_branch_cov","die_jsc_line_cov","die_jsc_func_cov","die_jsc_branch_cov","bcfuzz_die_jsc_line_cov","bcfuzz_die_jsc_func_cov","bcfuzz_die_jsc_branch_cov"]

list_list = [fuzzilli_hermes_line_cov,fuzzilli_hermes_func_cov,fuzzilli_hermes_branch_cov,bcfuzz_fuzzilli_hermes_line_cov,bcfuzz_fuzzilli_hermes_func_cov,bcfuzz_fuzzilli_hermes_branch_cov,die_hermes_line_cov,die_hermes_func_cov,die_hermes_branch_cov,bcfuzz_die_hermes_line_cov,bcfuzz_die_hermes_func_cov,bcfuzz_die_hermes_branch_cov,fuzzilli_jsc_line_cov,fuzzilli_jsc_func_cov,fuzzilli_jsc_branch_cov,bcfuzz_fuzzilli_jsc_line_cov,bcfuzz_fuzzilli_jsc_func_cov,bcfuzz_fuzzilli_jsc_branch_cov,die_jsc_line_cov,die_jsc_func_cov,die_jsc_branch_cov,bcfuzz_die_jsc_line_cov,bcfuzz_die_jsc_func_cov,bcfuzz_die_jsc_branch_cov]

for i in range(len(list_list)):
    current_list = list_list[i]
    current_value = round(sum(current_list)/len(current_list), 2) # average value
    print(list_name[i], ": ", current_value)

print("=============p-value==============")
print("fuzzilli_hermes_line:")
print(scipy.stats.mannwhitneyu(bcfuzz_fuzzilli_hermes_line_cov, fuzzilli_hermes_line_cov, False,'less'))
print("")

print("fuzzilli_hermes_func:")
print(scipy.stats.mannwhitneyu(bcfuzz_fuzzilli_hermes_func_cov, fuzzilli_hermes_func_cov, False,'less'))
print("")

print("fuzzilli_hermes_branch:")
print(scipy.stats.mannwhitneyu(bcfuzz_fuzzilli_hermes_branch_cov, fuzzilli_hermes_branch_cov, False,'less'))
print("")

print("die_hermes_line:")
print(scipy.stats.mannwhitneyu(bcfuzz_die_hermes_line_cov, die_hermes_line_cov, False,'less'))
print("")

print("die_hermes_func:")
print(scipy.stats.mannwhitneyu(bcfuzz_die_hermes_func_cov, die_hermes_func_cov, False,'less'))
print("")

print("die_hermes_branch:")
print(scipy.stats.mannwhitneyu(bcfuzz_die_hermes_branch_cov, die_hermes_branch_cov, False,'less'))
print("")

print("fuzzilli_jsc_line:")
print(scipy.stats.mannwhitneyu(bcfuzz_fuzzilli_jsc_line_cov, fuzzilli_jsc_line_cov, False,'less'))
print("")

print("fuzzilli_jsc_func:")
print(scipy.stats.mannwhitneyu(bcfuzz_fuzzilli_jsc_func_cov, fuzzilli_jsc_func_cov, False,'less'))
print("")

print("fuzzilli_jsc_branch:")
print(scipy.stats.mannwhitneyu(bcfuzz_fuzzilli_jsc_branch_cov, fuzzilli_jsc_branch_cov, False,'less'))
print("")

print("die_jsc_line:")
print(scipy.stats.mannwhitneyu(die_jsc_line_cov, bcfuzz_die_jsc_line_cov, False,'less'))
print("")

print("die_jsc_func:")
print(scipy.stats.mannwhitneyu(die_jsc_func_cov, bcfuzz_die_jsc_func_cov, False,'less'))
print("")

print("die_jsc_branch:")
print(scipy.stats.mannwhitneyu(die_jsc_branch_cov, bcfuzz_die_jsc_branch_cov, False,'less'))
print("")