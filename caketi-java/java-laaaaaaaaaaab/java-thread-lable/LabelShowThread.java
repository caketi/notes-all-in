/*
 * @Author: your name
 * @Date: 2020-12-19 11:54:22
 * @LastEditTime: 2020-12-19 11:58:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \notes\caketi-java\java-laaaaaaaaaaab\java-thread-lable\LabelShowThread.java
 */

public class LabelShowThread {

    public static void main(String[] args) {

        Gui gui=new Gui(); 

        LabelThread_1 lt_1 = new LabelThread_1(gui);  
        LabelThread_2 lt_2 = new LabelThread_2(gui);
        LabelThread_3 lt_3 = new LabelThread_3(gui);
        LabelThread_4 lt_4 = new LabelThread_4(gui);

        lt_1.start(); 
        lt_2.start();
        lt_3.start();
        lt_4.start();
    }

}








