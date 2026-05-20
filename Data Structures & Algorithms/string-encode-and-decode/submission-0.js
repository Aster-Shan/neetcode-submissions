class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const result =[];
        for(let i=0;i<strs.length;i++){
            let length = strs[i].length;
            let str1=length+"#"+strs[i];
            result.push(str1);
        }
        return result.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result=[];
        let i=0;
        while(i<str.length){
           let j=i;
            while (str[j]!= '#'){
                j++;
            }
               let length = Number(str.slice(i,j));
                let word = str.slice(j+1,j+1+length);
                result.push(word);
            i=j+1+length;
        }
       return result;
    }
}
