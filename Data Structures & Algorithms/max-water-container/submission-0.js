class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0;
        let right=heights.length-1;
        let best=0;

        while(left<right){
            const h= Math.min(heights[left],heights[right])
            const width =right-left;
            best = Math.max(best,h*width);

            if(heights[left]<heights[right]){
                left++;
            }else{
                 right--;
            }
      
        }
       return best;
    }
}
