class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * inputs are the array of nums
     * output mustbe the length
     * the first solution is using sort and loop
     * the create an array with consecutive squence
     * and remove the duplicate with set ==>O(log n) 
     */
    longestConsecutive(nums) {
        //create set
        const set =new Set(nums);
        let longest =0;
        for(let num of nums){
            //choose starting point
            if(!set.has(num-1)){
                let length =1;
                let current =num;
            //check if any consecutive number
            while(set.has(current+1)){
                length++;
                current++;
            }
            longest = Math.max(longest,length)
            }
        }
        return longest;

    }
}
