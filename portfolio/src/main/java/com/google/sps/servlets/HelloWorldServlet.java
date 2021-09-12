package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> thoughts = new ArrayList<>();
    thoughts.add("Everyone can fly, the problem is that we're not crazy enough for it!");
    thoughts.add("Connecting devices, enable them to be smarter and less vulnerable");
    thoughts.add("If you see what almost no one sees, you should do what almost no one does!");

    String toJson = convertToJson(thoughts);
    response.setContentType("application/json;");
    response.getWriter().println(toJson);
  }

  private String convertToJson(ArrayList<String> thoughts) {
    String json = "{";
    json += "\"though1\": ";
    json += "\"" + thoughts.get(0) + "\"";
    json += ", ";
    json += "\"though2\": ";
    json += "\"" + thoughts.get(1) + "\"";
    json += ", ";
    json += "\"though3\": ";
    json += "\"" + thoughts.get(2) + "\"";
    json += "}";
    return json;
  }
}

