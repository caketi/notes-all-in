/*
 * @Author: your name
 * @Date: 2020-12-13 22:31:42
 * @LastEditTime: 2020-12-13 22:31:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \notes\caketi-java\java-laaaaaaaaaaab\server-exp.java
 */
Socket socket = new Socket("127.0.0.1", "8080");
OutputStream os = socket.getOutputStream();
boolean autoflush = true;
PrintWriter out = new PrintWriter( socket.getOutputStream(), autoflush);
BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputstream()));

// send an HTTP request to the web server
out.println("GET /index.jsp HTTP/1.1");
out.println("Host: localhost:8080");
out.println("Connection: Close");
out.println();

// read the response
boolean loop = true;
StringBuffer sb = new StringBuffer(8096);
while (loop) {
    if (in.ready()) {
        int i=0;
        while (i != -1) {
            i = in.read();
            sb.append((char) i);
        }
        loop = false;
    }
    Thread.currentThread().sleep(50L);
}