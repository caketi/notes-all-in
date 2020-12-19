/*
 * @Author: your name
 * @Date: 2020-12-19 11:54:22
 * @LastEditTime: 2020-12-19 11:56:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \notes\caketi-java\java-laaaaaaaaaaab\java-thread-lable\LabelThread_1.java
 */
 

public class LabelThread_1 extends Thread { 
    private Gui gui;
    public LabelThread_1(Gui gui)
    {
        this.gui=gui;
    }
    public void run() {

        int i = 0;
        while (i++< 30) { 

            try {
                Thread.sleep(5000); 
                gui. jl_1.setVisible(false); 
                Thread.sleep(5000);
                gui. jl_1.setVisible(true);
            } catch (InterruptedException ie) {
                System.out.print(ie.getMessage());
            }
        }
    }
}