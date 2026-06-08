class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * use binary sort => left and right
     * also made mid ==>(left+right)/2
     * mid>right =>minimun must be on right side so left becomes mid+1
     * if mid<right , ==> right =mid;
     * return left value
     */
    findMin(nums) {
        let left =0;
        let right =nums.length-1;
        while(left<right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid]>nums[right]){
               left =mid+1; 
            }
            else{
                right = mid;
            }
        }
        return nums[left];
}
}