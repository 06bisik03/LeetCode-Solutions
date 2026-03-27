function lengthOfLongestSubstring(s: string): number {
    const lastSeen = new Array(128).fill(-1);
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const code = s.charCodeAt(right);

        // If current char is already inside the window, move left forward
        if (lastSeen[code] >= left) {
            left = lastSeen[code] + 1;
        }

        // Store latest index of current char
        lastSeen[code] = right;

        // Update longest valid window length
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}