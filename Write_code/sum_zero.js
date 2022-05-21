const arrayOfNum = (arr) => {
    const sumArr = new Set();

    let sum = 0;
    for (let i = 0; i < i.length; i++) {
        sum += arr[i];

        if (sum === 0 || sumArr.has(sum)) {
            console.log('True')
            return true;
        } else {
            sumArr.add(sum);
        }
        console.log('False')
        return false;
    }
}


// This code would have a runtime of O(n^2)