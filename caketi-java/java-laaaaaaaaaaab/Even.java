/*
 * @Author: your name
 * @Date: 2020-12-03 20:13:03
 * @LastEditTime: 2020-12-07 11:45:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \notes\caketi-java\java-laaaaaaaaaaab\Even.java
 */


/**
 * event class 
 */
public class Even {

    private Robot robot;
    

    public Even(){
        super();
    }
    public Even(Robot robot){
        super();
        this.robot = robot;
    }

    public int getM(){
        return robot.getM();
    }
    public int getCN(){
        return robot.getCN();
    }
}

