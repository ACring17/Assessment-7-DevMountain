const unique_char = (str) => {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str.indexOf(char) !== str.lastIndexOf(char)) {
            return false;
        }
        return true;
    }
}

// This code would have a run time of O(log n).