/*
 * @Author: your name
 * @Date: 2020-12-19 11:54:22
 * @LastEditTime: 2020-12-19 11:55:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \notes\caketi-java\java-laaaaaaaaaaab\java-thread-lable\LabelThread_3.java
 */
 

public class LabelThread_3 extends Thread { 
    private Gui gui;
    public LabelThread_3(Gui gui)
    {
        this.gui=gui;
    }
    public void run() {

        int i = 0;
        while (i++< 30) { 

            try {
                Thread.sleep(15000);  
                gui. jl_3.setVisible(false); 
                Thread.sleep(15000);
                gui. jl_3.setVisible(true);
            } catch (InterruptedException ie) {
                System.out.print(ie.getMessage());
            }
        }
    }
}