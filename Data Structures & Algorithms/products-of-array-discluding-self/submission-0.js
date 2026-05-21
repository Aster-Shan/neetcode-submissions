class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * inputs are num
     * output must be products of Array
     * brute force==> using nested loops 
     * multiply each index except self
     * O(n^2)
     * left and right products =>O(n)
     */
    productExceptSelf(nums) {
        //[1,1,1,1]
        const result = new Array(nums.length).fill(1);
        //define left product 
        let left=1;

        for(let i=0;i<nums.length;i++){
            //insert data into array
            result[i]=left;
            left = left*nums[i];//1*1=1
            //left array =[1,1,2,8]
        }

        //right product
        let right =1;
        for(let i =nums.length-1;i>=0;i--){
            //insert data in aray
            result[i]=result[i]*right;//8
            right = right*nums[i];
        }
        return result;
    }
}






