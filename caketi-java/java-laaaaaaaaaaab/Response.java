/*
 * @Author: your name
 * @Date: 2020-12-13 22:36:47
 * @LastEditTime: 2020-12-14 10:53:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \notes\caketi-java\java-laaaaaaaaaaab\Response.java
 */
public class Response {

  private static final int BUFFER_SIZE = 1024; // buffer size


  Request request;      // Request class
  OutputStream output;  // 

  public Response(OutputStream output) { // make the outputstream 
    this.output = output;
  }

  public void setRequest(Request request) {
    this.request = request;
  }

  public void sendStaticResource() throws IOException {
    byte[] bytes = new byte[BUFFER_SIZE]; // 1024
    FileInputStream fis = null; // Fileinputstream
    try {
      File file = new File(HttpServer.WEB_ROOT, request.getUri()); // File(server, uri)
      
      if (file.exists()) {
        
        fis = new FileInputStream(file);
        
        int ch = fis.read(bytes, 0, BUFFER_SIZE); // FileInputStream read()

        while (ch!=-1) {
          output.write(bytes, 0, ch);
          ch = fis.read(bytes, 0, BUFFER_SIZE);
        }
      }
      else {
        // file not found
        String errorMessage = "HTTP/1.1 404 File Not Found\r\n" +
          "Content-Type: text/html\r\n" +
          "Content-Length: 23\r\n" +
          "\r\n" +
          "<h1>File Not Found</h1>";
        output.write(errorMessage.getBytes());
      }
    }
    catch (Exception e) {
      // thrown if cannot instantiate a File object
      System.out.println(e.toString() );
    }
    finally {
      if (fis!=null)
        fis.close();
    }
  }
}