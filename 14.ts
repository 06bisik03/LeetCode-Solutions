function longestCommonPrefix(strs: string[]): string{
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    //Assume the whole thing is a prefix at first
    let prefix = strs[0];
    // while the current string does not start with prefix
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            //Chop it down one by one until its true
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
};