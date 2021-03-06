/**
Largest Time for Given Digits

    Given an array of 4 digits, return the largest 24 hour time that can be made.

    The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

    Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

    Example 1:

Input: [1,2,3,4]
Output: "23:41"

Example 2:

Input: [5,5,5,5]
Output: ""

Note:

    A.length == 4
    0 <= A[i] <= 9

* */

/**
 * @param {number[]} A
 * @return {string}
 */
const largestTimeFromDigits = function (A) {
    const perms = permsFromArray(A);
    const filtered_perms = perms.filter((x) => {
        const hour = parseInt(x.slice(0, 2), 10);
        const min = parseInt(x.slice(2, 4), 10);
        if (hour > 23) {
            return false;
        }
        if (min > 59) {
            return false;
        }
        return true;
    });
    if (filtered_perms.length === 0) {
        return "";
    }
    filtered_perms.sort();
    const max_number = filtered_perms[filtered_perms.length - 1];
    return `${max_number.slice(0, 2)}:${max_number.slice(2, 4)}`;
};

function permsFromArray(A) {
    if (A.length < 2) {
        return A;
    }
    let perms = [];
    for (let i = 0; i < A.length; i++) {
        const num = A[i];
        const rota = [...A];
        rota.splice(i, 1);
        let semi_perms = permsFromArray(rota);
        semi_perms = semi_perms.map((x) => num.toString() + x.toString());
        perms = perms.concat(semi_perms);
    }
    return perms;
}

module.exports = largestTimeFromDigits;
