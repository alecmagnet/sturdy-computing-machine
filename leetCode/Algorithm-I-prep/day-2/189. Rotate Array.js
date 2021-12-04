var rotate = function(nums, k) {
        function rotate(arr, start, end) {
        while (start<end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }
    }
    k %= nums.length
    
    rotate(nums, 0, nums.length-1)
    rotate(nums, 0, k-1)
    rotate(nums, k, nums.length-1)
};