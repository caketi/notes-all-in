 

public class MyRobotListener implements  RobotListener{
    @Override
    public void max(Even even) {
        int n = even.getM();
        int p = even.getm();
        int o = even.getCN();
         
        System.out.println("Max stu: "+n);
        System.out.println("now total: " + p);
        System.out.println("course stu: " + o);
        
    }
 
}