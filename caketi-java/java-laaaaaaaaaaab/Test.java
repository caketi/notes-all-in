/*
 * @Author: your name
 * @Date: 2020-12-03 20:12:46
 * @LastEditTime: 2020-12-07 11:40:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \notes\caketi-java\java-laaaaaaaaaaab\Test.java
 */


public class Test {

    public static void main(String[] args) {
        Robot robot = new Robot();
        robot.registerListener(new MyRobotListener());
        if(robot.getCN() > robot.getM()){
            System.out.println("overflow!!!!!!!!!!");
            robot.max();
        }
        if(robot.getCN() < robot.getM()){System.out.println("everything is ok, not overflow");}
    }
}