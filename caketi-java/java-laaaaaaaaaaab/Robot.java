 

/**
 * event source 
 */
public class Robot {

    private RobotListener listener;
    private String name[] = {"cc", "bb"};
    
    private int cn = name.length;
    private int M = 2;
    private int m = 3;
    private String  course = "english";
    public void setM(int M){
        this.M =M;
    }
    public void setName(String[] name){
        this.name = name ;
    }
	public String[] Robot(){
        return this.name;
    }
	 
	public String[] getN(){
        return this.name;}
    public int getM(){
        return this.M;
    }
    public int getm(){
        return this.m;
    }
	public int getCN(){
        return this.cn;
    }
	// register
    public void registerListener(RobotListener listener){
     this.listener  = listener;
    }

    
    public void max(){
        if(listener!=null){
            Even even = new Even(this);
            this.listener.max(even);
        }
        System.out.println("course name: " + this.course);

    }

     
     


}