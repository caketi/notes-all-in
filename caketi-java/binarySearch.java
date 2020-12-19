/*
 * @Author: your name
 * @Date: 2020-12-19 16:33:13
 * @LastEditTime: 2020-12-19 16:51:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \notes\caketi-java\binarysearch.java
 */
public class binarySearch{
        public static int  binarySearch(int[] nums, int target ,int left , int right){
            while (left <= right) {
                int mid = left + ((right - left)>>1);
                if (nums[mid] == target) {
                    return mid;
                }else if (nums[mid] < target) {
                    left = mid + 1;
                }else if (nums[mid] > target ) {
                    right = mid - 1;
                }
                return -1;
            }
            
        }
    }
