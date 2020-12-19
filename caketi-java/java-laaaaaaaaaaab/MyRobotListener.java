/*
 * @Author: your name
 * @Date: 2020-12-03 20:13:03
 * @LastEditTime: 2020-12-07 11:51:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \notes\caketi-java\java-laaaaaaaaaaab\MyRobotListener.java
 */


public class MyRobotListener implements  RobotListener{
    
    public void max(Even even) {
        int n = even.getM();
        int o = even.getCN();
        System.out.println("Max stu: "+n);
        System.out.println("course stu number: " + o);         
    }

}