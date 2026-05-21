class Solution {
      /**
     * @param {string} s
     * @return {boolean}
     * input is s 
     * output must be true or false
     * using reverse leads to O(n^2)
     * use two pointer ==O(n)
     */
    isPalindrome(s) {

        let left = 0;
        let right = s.length - 1;

        while (left < right) {

            // skip non-alphanumeric left
            while (left < right && !this.isAlphaNumeric(s[left])) {
                left++;
            }

            // skip non-alphanumeric right
            while (left < right && !this.isAlphaNumeric(s[right])) {
                right--;
            }

            // compare
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    isAlphaNumeric(ch) {
        return (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z') ||
            (ch >= '0' && ch <= '9')
        );
    }
}