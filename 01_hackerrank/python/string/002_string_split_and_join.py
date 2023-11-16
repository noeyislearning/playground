"""
 * String Split and Join
"""

def split_and_join(line):
    w = line.split()
    jl = "-".join(w)
    return jl 

if __name__ == '__main__':
    line = input()
    result = split_and_join(line)
    print(result)