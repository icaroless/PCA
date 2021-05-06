package com.pca.educapp.web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class ConfigureSetup {
    public enum OS {
        WINDOWS, LINUX, MAC, SOLARIS
    };// Operating systems.

    private static OS os = null;

    public static void runBuildConfig() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        os = getOS();
        System.out.println(("OS VERSION: " + os));

        switch (os) {
            // -- Windows --
            case WINDOWS:
                // Run a command
                processBuilder.command("cmd.exe", "/c", "cd ./app && npm start && start https:localhost:3000");
                break;

            // -- Linux --
            case LINUX:
                // Run a command
                processBuilder.command("bash", "-c", "cd ./app && npm start && start https:localhost:3000");
                break;
        }

        try {

            Process process = processBuilder.start();

            StringBuilder output = new StringBuilder();

            BufferedReader reader = new BufferedReader(
                    new InputStreamReader(process.getInputStream()));

            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line + "\n");
                System.out.println(line + "\n");
            }

            int exitVal = process.waitFor();
            if (exitVal == 0) {
                System.out.println("Success!");
                System.out.println(output);
                System.exit(0);
            } else {
                //abnormal...
            }

        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    public static OS getOS() {
        if (os == null) {
            String operSys = System.getProperty("os.name").toLowerCase();
            if (operSys.contains("win")) {
                os = OS.WINDOWS;
            } else if (operSys.contains("nix") || operSys.contains("nux")
                    || operSys.contains("aix") || operSys.contains("linux")) {
                os = OS.LINUX;
            } else if (operSys.contains("mac")) {
                os = OS.MAC;
            } else if (operSys.contains("sunos")) {
                os = OS.SOLARIS;
            }
        }
        return os;
    }
}
