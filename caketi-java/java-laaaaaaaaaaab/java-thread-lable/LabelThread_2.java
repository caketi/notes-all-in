 

public class LabelThread_2 extends Thread { 
    private Gui gui;
    public LabelThread_2(Gui gui)
    {
        this.gui=gui;
    }
    public void run() {

        int i = 0;
        while (i++< 30) { 

            try {
                Thread.sleep(10000);
                
                gui. jl_2.setVisible(false); 
                Thread.sleep(10000);
                gui. jl_2.setVisible(true);
            } catch (InterruptedException ie) {
                System.out.print(ie.getMessage());
            }
        }
    }
}