/*
 * @Author: your name
 * @Date: 2020-12-13 22:35:26
 * @LastEditTime: 2020-12-13 22:35:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \notes\caketi-java\java-laaaaaaaaaaab\Request.java
 */
public class Request {

  private InputStream input;
  private String uri;

  public Request(InputStream input) {
    this.input = input;
  }

  public void parse() {
    // Read a set of characters from the socket
    StringBuffer request = new StringBuffer(2048);
    int i;
    byte[] buffer = new byte[2048];
    try {
      i = input.read(buffer);
    }
    catch (IOException e) {
      e.printStackTrace();
      i = -1;
    }
    for (int j=0; j<i; j++) {
      request.append((char) buffer[j]);
    }
    System.out.print(request.toString());
    uri = parseUri(request.toString());
  }

  private String parseUri(String requestString) {
    int index1, index2;
    index1 = requestString.indexOf(' ');
    if (index1 != -1) {
      index2 = requestString.indexOf(' ', index1 + 1);
      if (index2 > index1)
        return requestString.substring(index1 + 1, index2);
    }
    return null;
  }

  public String getUri() {
    return uri;
  }

}