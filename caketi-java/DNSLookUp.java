import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.UnknownHostException;

//import sun.security.krb5.internal.HostAddress;

/*
 * Usage: java DNSLookUp <IP name>
 * i.e: java DNSLookUp www.baidu.com👁️‍🗨️
 * 🏴󠁧󠁢󠁳󠁣󠁴󠁿 crtl-i ==== emoj -vscode
 * 
 */

public class DNSLookUp{
    public static void main(String[] args){
        InetAddress hostAddress;


        try {
            hostAddress = InetAddress.getByName(args[0]);
            System.out.println(hostAddress.getHostAddress());
        } 
        catch(UnknownHostException uhe){
            System.out.println("Unknown host: " + args[0]);
        }
        
    }
}
