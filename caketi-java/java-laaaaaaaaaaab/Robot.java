/*
 * @Author: your name
 * @Date: 2020-12-03 20:13:03
 * @LastEditTime: 2020-12-07 12:22:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings EdiS
 * @FilePath: \notes\caketi-java\java-laaaaaaaaaaab\Robot.java
 */


/**
 * event source 
 */
import java.util.*;
public class Robot {

    private RobotListener listener;
    private String name[] = {"cc", "bb"};
    
    private int cn = name.length;
    private int M = 1;
    private String  course = "english";
    public void setM(int M){
        this.M =M;
    }
    public void setName(String[] name){
        this.name = name ;
    }
	
	public String[] getN(){
        return this.name;
    }
    public int getM(){
        return this.M;
    }
    public int getCN(){
        return this.cn;
    }

	public void registerListener(RobotListener listener){
        this.listener  = listener;
    }
    public void deleteListener(){
        this.listener = null;
    }

    public void max(){
        if(listener!=null){
            Even even = new Even(this);
            this.listener.max(even);
        }
        System.out.println("course name: " + this.course);
        System.out.println("course student: " + Arrays.toString(name));
    }
}