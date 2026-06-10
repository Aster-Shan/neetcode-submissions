class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     * use binary search
     * compare mid and target
     * left<mid,left<=target; right = mid-1;
     * right>mid,right>=target;left =mid+1;
     */
    search(nums, target) {
       let left =0;
       let right =nums.length-1;
       while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]=== target){
            return mid;
        }
       // nums = [3,4,5,6,1,2], target = 1(4)
       if(nums[left]<=nums[mid]){
 if(nums[left]<=target && target<nums[mid])
       {
        right = mid-1;
       }
       else{
        left=mid+1;
       }
       }
      
       else{
           if( nums[mid]<target && target <= nums[right] ){
        left = mid+1;
       }
       else{
        right =mid-1;
       }

       }
    

       } 
       return -1;
    }
}
