 

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
    

 

    public String[] getN() {
        return robot.getN();
    }

    public int getm(){
        return robot.getm();
    }
    public int getM(){
        return robot.getM();
    }
    public int getCN(){
        return robot.getCN();
    }
 
    public void setRobot(Robot robot) {
        this.robot = robot;
    }
}

